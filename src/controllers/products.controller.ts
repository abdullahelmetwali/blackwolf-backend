import { NextFunction, Request, Response } from "express";
import { startSession } from "mongoose";

import { API_PORT } from "../config/env";
import { Product } from "../types";
import { CustomValidationError } from "../classes";

import { PRODUCTS_MODEL } from "../models/products.model";
import { COLORS_MODEL } from "../models/colors.model";
import { SIZES_MODEL } from "../models/sizes.model";
import { CATEGORIES_MODEL } from "../models/categories.model";

import { GET_USER } from "../utils/get-user";
import { softDeleteUtility } from "../utils/soft-delete";
import { hardDeleteUtility } from "../utils/hard-delete";
import { restoreUtility } from "../utils/restore";

export const filterProucts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { category, size, color, price, status } = req.query;
        const filter: Record<string, any> = { isDeleted: false };

        if (category) filter.categories = category;
        if (size) filter.sizes = size;
        if (color) filter.colors = color;
        if (status) filter.status = status;

        const products = await PRODUCTS_MODEL.find(filter).lean();
        return res.status(200).json({ data: products });
    } catch (error) {
        next(error);
    }
};

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    const session = await startSession();
    try {
        session.startTransaction();

        const { name, colors, sizes, categories, status } = req.body as Product;

        const [anotherProduct, hasColors, hasSizes, hasCategories] = await Promise.allSettled([
            PRODUCTS_MODEL.findOne({ name: name }).session(session),
            COLORS_MODEL.find({ _id: { $in: colors }, isDeleted: false }).select("_id name").session(session),
            SIZES_MODEL.find({ _id: { $in: sizes }, isDeleted: false }).select("_id name").session(session),
            CATEGORIES_MODEL.find({ _id: { $in: categories }, isDeleted: false }).select("_id name").session(session),
        ]);

        let errors: Record<string, string> = {};

        if (anotherProduct.status === "fulfilled") {
            if (anotherProduct.value) {
                if (anotherProduct?.value?.isDeleted) {
                    errors.name = "This name exists in a deleted product, check it";
                } else {
                    errors.name = "This name exists in another product";
                }
            }
        } else {
            throw new Error("Failed to get product");
        }

        if (status !== "0" && status !== "1") errors.status = "Status must be published or draft";

        if (hasColors.status === "fulfilled") {
            if (hasColors.value.length !== colors?.length) errors.colors = "Color ID does not exist";
        } else {
            throw new Error("Failed to get color");
        };

        if (hasSizes.status === "fulfilled") {
            if (hasSizes.value.length !== sizes?.length) errors.sizes = "Size ID does not exist";
        } else {
            throw new Error("Failed to get size");
        };

        if (hasCategories.status === "fulfilled") {
            if (hasCategories.value.length !== categories?.length) errors.categories = "Category ID does not exist";
        } else {
            throw new Error("Failed to get category");
        };

        if (!req.file) errors.image = "Please upload product's image";

        if (Object.keys(errors).length > 0) {
            throw new CustomValidationError(409, errors);
        }

        const userCreatedProduct = await GET_USER(req);
        if (userCreatedProduct instanceof Error) throw new Error(userCreatedProduct.message);

        const imgURL = req.file && `${API_PORT}/${req?.file?.destination}${req?.file?.filename}`;

        const newProduct = await PRODUCTS_MODEL.create(
            [{
                ...req.body,
                categories: hasCategories.value,
                sizes: hasSizes.value,
                colors: hasColors.value,
                createdBy: {
                    name: userCreatedProduct.name,
                    email: userCreatedProduct.email
                },
                image: imgURL
            }],
            { session }
        );

        if (!newProduct[0]) {
            throw new Error("Product creation failed");
        };

        await session.commitTransaction();

        return res.status(201).json({
            data: {
                ...newProduct[0].toObject(),
            }
        });
    } catch (error) {
        if (session.inTransaction()) {
            await session.abortTransaction();
        }
        next(error);
    } finally {
        session.endSession();
    }
};

export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    const session = await startSession();
    try {
        session.startTransaction();
        const { id } = req.params;
        const { name, description, colors, sizes, categories, status, price, discount, inStock, image } = req.body as Product;

        const thisProduct = await PRODUCTS_MODEL.findById(id).session(session);

        const userUpdatedProduct = await GET_USER(req);
        if (userUpdatedProduct instanceof Error) throw new Error(userUpdatedProduct.message);

        if (!thisProduct) {
            throw new Error("Product not found");
        };

        const [anotherProduct, hasColors, hasSizes, hasCategories] = await Promise.allSettled([
            PRODUCTS_MODEL.findOne({ _id: { $ne: id }, name: name }).session(session),
            COLORS_MODEL.find({ _id: { $in: colors }, isDeleted: false }).select("_id name").session(session),
            SIZES_MODEL.find({ _id: { $in: sizes }, isDeleted: false }).select("_id name").session(session),
            CATEGORIES_MODEL.find({ _id: { $in: categories }, isDeleted: false }).select("_id name").session(session),
        ]);

        let errors: Record<string, string> = {};

        if (anotherProduct.status === "fulfilled") {
            if (anotherProduct.value) {
                if (anotherProduct?.value?.isDeleted) {
                    errors.name = "This name exists in a deleted product, check it";
                } else {
                    errors.name = "This name exists in another product";
                }
            }
        } else {
            throw new Error("Failed to get product");
        };

        if (status !== "0" && status !== "1") errors.status = "Status must be 0 or 1";

        if (hasColors.status === "fulfilled") {
            if (hasColors.value.length !== colors?.length) errors.colors = "Color ID does not exist";
        } else {
            throw new Error("Failed to get color");
        };

        if (hasSizes.status === "fulfilled") {
            if (hasSizes.value.length !== sizes?.length) errors.sizes = "Size ID does not exist";
        } else {
            throw new Error("Failed to get size");
        };

        if (hasCategories.status === "fulfilled") {
            if (hasCategories.value.length !== categories?.length) errors.categories = "Category ID does not exist";
        } else {
            throw new Error("Failed to get category");
        };

        if (!req.file && !thisProduct.image) errors.image = "Please upload product's image";

        if (Object.keys(errors).length > 0) {
            throw new CustomValidationError(409, errors);
        };

        // updating 
        thisProduct.set({
            name: name,
            description: description,
            price: price,
            discount: discount,
            inStock: inStock,
            image: image,
            status: status,
            colors: hasColors.value.map(c => ({ _id: c._id, name: c.name })),
            sizes: hasSizes.value.map(s => ({ _id: s._id, name: s.name })),
            categories: hasCategories.value.map(ct => ({ _id: ct._id, name: ct.name })),
            updatedBy: userUpdatedProduct?.name
        });

        await thisProduct.save();
        await session.commitTransaction();

        return res.status(201).json({
            data: thisProduct
        });
    } catch (error) {
        if (session.inTransaction()) {
            await session.abortTransaction();
        }
        next(error);
    } finally {
        session.endSession();
    }
};

export const softDeleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const userDeletedProduct = await GET_USER(req);
        if (userDeletedProduct instanceof Error) throw new Error(userDeletedProduct.message);

        const softDeleted = await softDeleteUtility(id as string, PRODUCTS_MODEL, "product", userDeletedProduct);
        return res.status(200).json({
            message: `${softDeleted.name} soft deleted successfully`
        });
    } catch (error) {
        next(error);
    }
};

export const hardDeleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const hardDeleted = await hardDeleteUtility(id as string, PRODUCTS_MODEL, "product");
        return res.status(200).json({
            message: `${hardDeleted.name} deleted forever successfully`
        });
    } catch (error) {
        next(error);
    }
};

export const restoreProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const restored = await restoreUtility(id as string, PRODUCTS_MODEL, "product");
        return res.status(200).json({
            message: `${restored.name} restored successfully`
        });
    } catch (error) {
        next(error);
    };
};
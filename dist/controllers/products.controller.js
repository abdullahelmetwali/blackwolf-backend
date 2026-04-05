"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.restoreProduct = exports.hardDeleteProduct = exports.softDeleteProduct = exports.updateProduct = exports.createProduct = exports.getProduct = exports.filterProucts = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const env_1 = require("../config/env");
const classes_1 = require("../classes");
const products_model_1 = require("../models/products.model");
const colors_model_1 = require("../models/colors.model");
const sizes_model_1 = require("../models/sizes.model");
const categories_model_1 = require("../models/categories.model");
const get_user_1 = require("../utils/get-user");
const soft_delete_1 = require("../utils/soft-delete");
const hard_delete_1 = require("../utils/hard-delete");
const restore_1 = require("../utils/restore");
const filterProucts = async (req, res, next) => {
    try {
        const { category, size, color, price, status } = req.query;
        const filter = { isDeleted: false };
        if (category)
            filter.categories = category;
        if (size)
            filter.sizes = size;
        if (color)
            filter.colors = color;
        if (status)
            filter.status = status;
        const products = await products_model_1.PRODUCTS_MODEL.find(filter).lean();
        return res.status(200).json({ data: products });
    }
    catch (error) {
        next(error);
    }
};
exports.filterProucts = filterProucts;
const getProduct = async (req, res, next) => {
    const isId = mongoose_1.default.Types.ObjectId.isValid(req.params.identifier);
    try {
        const product = isId ? await products_model_1.PRODUCTS_MODEL.findById(req.params.identifier) : await products_model_1.PRODUCTS_MODEL.findOne({ slug: req.params.identifier });
        if (!product)
            throw new Error("Product not found");
        return res.status(200).json({ data: product });
    }
    catch (error) {
        next(error);
    }
};
exports.getProduct = getProduct;
const createProduct = async (req, res, next) => {
    const session = await (0, mongoose_1.startSession)();
    try {
        session.startTransaction();
        const { name, colors, sizes, categories, status } = req.body;
        const [anotherProduct, hasColors, hasSizes, hasCategories] = await Promise.allSettled([
            products_model_1.PRODUCTS_MODEL.findOne({ name: name }).session(session),
            colors_model_1.COLORS_MODEL.find({ _id: { $in: colors }, isDeleted: false }).select("_id name").session(session),
            sizes_model_1.SIZES_MODEL.find({ _id: { $in: sizes }, isDeleted: false }).select("_id name").session(session),
            categories_model_1.CATEGORIES_MODEL.find({ _id: { $in: categories }, isDeleted: false }).select("_id name").session(session),
        ]);
        let errors = {};
        if (anotherProduct.status === "fulfilled") {
            if (anotherProduct.value) {
                if (anotherProduct?.value?.isDeleted) {
                    errors.name = "This name exists in a deleted product, check it";
                }
                else {
                    errors.name = "This name exists in another product";
                }
            }
        }
        else {
            throw new Error("Failed to get product");
        }
        if (status !== "0" && status !== "1")
            errors.status = "Status must be published or draft";
        if (hasColors.status === "fulfilled") {
            if (hasColors.value.length !== colors?.length)
                errors.colors = "Color ID does not exist";
        }
        else {
            throw new Error("Failed to get color");
        }
        ;
        if (hasSizes.status === "fulfilled") {
            if (hasSizes.value.length !== sizes?.length)
                errors.sizes = "Size ID does not exist";
        }
        else {
            throw new Error("Failed to get size");
        }
        ;
        if (hasCategories.status === "fulfilled") {
            if (hasCategories.value.length !== categories?.length)
                errors.categories = "Category ID does not exist";
        }
        else {
            throw new Error("Failed to get category");
        }
        ;
        if (!req.file)
            errors.image = "Please upload product's image";
        if (Object.keys(errors).length > 0) {
            throw new classes_1.CustomValidationError(409, errors);
        }
        const userCreatedProduct = await (0, get_user_1.GET_USER)(req);
        if (userCreatedProduct instanceof Error)
            throw new Error(userCreatedProduct.message);
        const imgURL = req.file && `${env_1.API_PORT}/${req?.file?.destination}${req?.file?.filename}`;
        console.log(userCreatedProduct);
        const newProduct = await products_model_1.PRODUCTS_MODEL.create([{
                ...req.body,
                categories: hasCategories.value,
                sizes: hasSizes.value,
                colors: hasColors.value,
                createdBy: {
                    name: userCreatedProduct ? userCreatedProduct.fullName : "Unknown",
                    email: userCreatedProduct ? userCreatedProduct.email : "Unknown"
                },
                image: imgURL
            }], { session });
        if (!newProduct[0]) {
            throw new Error("Product creation failed");
        }
        ;
        await session.commitTransaction();
        return res.status(201).json({
            data: {
                ...newProduct[0].toObject(),
            }
        });
    }
    catch (error) {
        if (session.inTransaction()) {
            await session.abortTransaction();
        }
        next(error);
    }
    finally {
        session.endSession();
    }
};
exports.createProduct = createProduct;
const updateProduct = async (req, res, next) => {
    const session = await (0, mongoose_1.startSession)();
    try {
        session.startTransaction();
        const { id } = req.params;
        const { name, description, colors, sizes, categories, status, price, discount, inStock, image } = req.body;
        const thisProduct = await products_model_1.PRODUCTS_MODEL.findById(id).session(session);
        const userUpdatedProduct = await (0, get_user_1.GET_USER)(req);
        if (userUpdatedProduct instanceof Error)
            throw new Error(userUpdatedProduct.message);
        if (!thisProduct) {
            throw new Error("Product not found");
        }
        ;
        const [anotherProduct, hasColors, hasSizes, hasCategories] = await Promise.allSettled([
            products_model_1.PRODUCTS_MODEL.findOne({ _id: { $ne: id }, name: name }).session(session),
            colors_model_1.COLORS_MODEL.find({ _id: { $in: colors }, isDeleted: false }).select("_id name").session(session),
            sizes_model_1.SIZES_MODEL.find({ _id: { $in: sizes }, isDeleted: false }).select("_id name").session(session),
            categories_model_1.CATEGORIES_MODEL.find({ _id: { $in: categories }, isDeleted: false }).select("_id name").session(session),
        ]);
        let errors = {};
        if (anotherProduct.status === "fulfilled") {
            if (anotherProduct.value) {
                if (anotherProduct?.value?.isDeleted) {
                    errors.name = "This name exists in a deleted product, check it";
                }
                else {
                    errors.name = "This name exists in another product";
                }
            }
        }
        else {
            throw new Error("Failed to get product");
        }
        ;
        if (status !== "0" && status !== "1")
            errors.status = "Status must be 0 or 1";
        if (hasColors.status === "fulfilled") {
            if (hasColors.value.length !== colors?.length)
                errors.colors = "Color ID does not exist";
        }
        else {
            throw new Error("Failed to get color");
        }
        ;
        if (hasSizes.status === "fulfilled") {
            if (hasSizes.value.length !== sizes?.length)
                errors.sizes = "Size ID does not exist";
        }
        else {
            throw new Error("Failed to get size");
        }
        ;
        if (hasCategories.status === "fulfilled") {
            if (hasCategories.value.length !== categories?.length)
                errors.categories = "Category ID does not exist";
        }
        else {
            throw new Error("Failed to get category");
        }
        ;
        if (!req.file && !thisProduct.image)
            errors.image = "Please upload product's image";
        if (Object.keys(errors).length > 0) {
            throw new classes_1.CustomValidationError(409, errors);
        }
        ;
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
            updatedBy: userUpdatedProduct?.fullName
        });
        await thisProduct.save();
        await session.commitTransaction();
        return res.status(201).json({
            data: thisProduct
        });
    }
    catch (error) {
        if (session.inTransaction()) {
            await session.abortTransaction();
        }
        next(error);
    }
    finally {
        session.endSession();
    }
};
exports.updateProduct = updateProduct;
const softDeleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userDeletedProduct = await (0, get_user_1.GET_USER)(req);
        if (userDeletedProduct instanceof Error)
            throw new Error(userDeletedProduct.message);
        const softDeleted = await (0, soft_delete_1.softDeleteUtility)(id, products_model_1.PRODUCTS_MODEL, "product", userDeletedProduct);
        return res.status(200).json({
            message: `${softDeleted.name} soft deleted successfully`
        });
    }
    catch (error) {
        next(error);
    }
};
exports.softDeleteProduct = softDeleteProduct;
const hardDeleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const hardDeleted = await (0, hard_delete_1.hardDeleteUtility)(id, products_model_1.PRODUCTS_MODEL, "product");
        return res.status(200).json({
            message: `${hardDeleted.name} deleted forever successfully`
        });
    }
    catch (error) {
        next(error);
    }
};
exports.hardDeleteProduct = hardDeleteProduct;
const restoreProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const restored = await (0, restore_1.restoreUtility)(id, products_model_1.PRODUCTS_MODEL, "product");
        return res.status(200).json({
            message: `${restored.name} restored successfully`
        });
    }
    catch (error) {
        next(error);
    }
    ;
};
exports.restoreProduct = restoreProduct;
//# sourceMappingURL=products.controller.js.map
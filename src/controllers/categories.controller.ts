import { Request, Response, NextFunction } from "express";

import { CustomValidationError } from "../classes";
import { CATEGORIES_MODEL } from "../models/categories.model";
import { GET_USER } from "../utils/get-user";

import { softDeleteUtility } from "../utils/soft-delete";
import { hardDeleteUtility } from "../utils/hard-delete";
import { restoreUtility } from "../utils/restore";

export const createCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name } = req.body;

        const sameCategory = await CATEGORIES_MODEL.findOne({ name })

        const userCreatedCategory = await GET_USER(req);
        if (userCreatedCategory instanceof Error) throw new Error(userCreatedCategory.message);

        let errors: Record<string, string> = {};

        if (sameCategory?.isDeleted) errors.name = "This name exsits in a deleted category";
        if (sameCategory?.name && !sameCategory?.isDeleted) errors.name = "This name exsits in another category";

        if (Object.keys(errors).length > 0) {
            throw new CustomValidationError(409, errors);
        };

        const newCategory = await CATEGORIES_MODEL.create({
            ...req.body,
            createdBy: {
                name: userCreatedCategory.name,
                email: userCreatedCategory.email
            }
        });

        return res.status(201).json({
            data: newCategory
        });
    } catch (error) {
        return next(error);
    }
};

export const updateCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const thisCategory = await CATEGORIES_MODEL.findById(id);
        if (!thisCategory) {
            throw new Error("Category not found!");
        };

        const userUpdatedCategory = await GET_USER(req);
        if (userUpdatedCategory instanceof Error) throw new Error(userUpdatedCategory.message);

        // see if there is name
        if (name && name !== thisCategory.name) {

            const sameCategory = await CATEGORIES_MODEL.findOne({
                _id: { $ne: id },
                name: { $ne: name },
            });

            if (sameCategory?.name === name) throw new CustomValidationError(409, { name: "This name exists in another category" });
            if (sameCategory?.isDeleted) throw new CustomValidationError(409, { name: "This name exists in a deleted category" });
        };

        thisCategory.set({
            name: name,
            updatedBy: userUpdatedCategory.name
        })

        // save this Category new data after checking all data 
        await thisCategory.save();
        return res.status(200).json({
            data: thisCategory.toObject()
        });
    } catch (error) {
        next(error);
    };
};

export const softDeleteCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const userDeletedProduct = await GET_USER(req);
        if (userDeletedProduct instanceof Error) throw new Error(userDeletedProduct.message);

        const softDeleted = await softDeleteUtility(id as string, CATEGORIES_MODEL as any, "category", userDeletedProduct);

        return res.status(200).json({
            message: `${softDeleted.name} soft deleted successfully`
        });
    } catch (error) {
        next(error);
    }
};

export const hardDeleteCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const hardDeleted = await hardDeleteUtility(id as string, CATEGORIES_MODEL, "category");

        return res.status(200).json({
            message: `${hardDeleted.name} deleted forever successfully`
        });
    } catch (error) {
        next(error);
    };
};

export const restoreCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const restored = await restoreUtility(id as string, CATEGORIES_MODEL, "category");
        return res.status(200).json({
            message: `${restored.name} restored successfully`
        });
    } catch (error) {
        next(error);
    };
};
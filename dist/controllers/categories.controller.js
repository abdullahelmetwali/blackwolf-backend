"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restoreCategory = exports.hardDeleteCategory = exports.softDeleteCategory = exports.updateCategory = exports.createCategory = void 0;
const classes_1 = require("../classes");
const categories_model_1 = require("../models/categories.model");
const get_user_1 = require("../utils/get-user");
const soft_delete_1 = require("../utils/soft-delete");
const hard_delete_1 = require("../utils/hard-delete");
const restore_1 = require("../utils/restore");
const createCategory = async (req, res, next) => {
    try {
        const { name } = req.body;
        const sameCategory = await categories_model_1.CATEGORIES_MODEL.findOne({ name });
        const userCreatedCategory = await (0, get_user_1.GET_USER)(req);
        if (userCreatedCategory instanceof Error)
            throw new Error(userCreatedCategory.message);
        let errors = {};
        if (sameCategory?.isDeleted)
            errors.name = "This name exsits in a deleted category";
        if (sameCategory?.name && !sameCategory?.isDeleted)
            errors.name = "This name exsits in another category";
        if (Object.keys(errors).length > 0) {
            throw new classes_1.CustomValidationError(409, errors);
        }
        ;
        const newCategory = await categories_model_1.CATEGORIES_MODEL.create({
            ...req.body,
            createdBy: {
                name: userCreatedCategory.fullName,
                email: userCreatedCategory.email
            }
        });
        return res.status(201).json({
            data: newCategory
        });
    }
    catch (error) {
        return next(error);
    }
};
exports.createCategory = createCategory;
const updateCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const thisCategory = await categories_model_1.CATEGORIES_MODEL.findById(id);
        if (!thisCategory) {
            throw new Error("Category not found!");
        }
        ;
        const userUpdatedCategory = await (0, get_user_1.GET_USER)(req);
        if (userUpdatedCategory instanceof Error)
            throw new Error(userUpdatedCategory.message);
        // see if there is name
        if (name && name !== thisCategory.name) {
            const sameCategory = await categories_model_1.CATEGORIES_MODEL.findOne({
                _id: { $ne: id },
                name: { $ne: name },
            });
            if (sameCategory?.name === name)
                throw new classes_1.CustomValidationError(409, { name: "This name exists in another category" });
            if (sameCategory?.isDeleted)
                throw new classes_1.CustomValidationError(409, { name: "This name exists in a deleted category" });
        }
        ;
        thisCategory.set({
            name: name,
            updatedBy: userUpdatedCategory.fullName
        });
        // save this Category new data after checking all data 
        await thisCategory.save();
        return res.status(200).json({
            data: thisCategory.toObject()
        });
    }
    catch (error) {
        next(error);
    }
    ;
};
exports.updateCategory = updateCategory;
const softDeleteCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userDeletedProduct = await (0, get_user_1.GET_USER)(req);
        if (userDeletedProduct instanceof Error)
            throw new Error(userDeletedProduct.message);
        const softDeleted = await (0, soft_delete_1.softDeleteUtility)(id, categories_model_1.CATEGORIES_MODEL, "category", userDeletedProduct);
        return res.status(200).json({
            message: `${softDeleted.name} soft deleted successfully`
        });
    }
    catch (error) {
        next(error);
    }
};
exports.softDeleteCategory = softDeleteCategory;
const hardDeleteCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const hardDeleted = await (0, hard_delete_1.hardDeleteUtility)(id, categories_model_1.CATEGORIES_MODEL, "category");
        return res.status(200).json({
            message: `${hardDeleted.name} deleted forever successfully`
        });
    }
    catch (error) {
        next(error);
    }
    ;
};
exports.hardDeleteCategory = hardDeleteCategory;
const restoreCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const restored = await (0, restore_1.restoreUtility)(id, categories_model_1.CATEGORIES_MODEL, "category");
        return res.status(200).json({
            message: `${restored.name} restored successfully`
        });
    }
    catch (error) {
        next(error);
    }
    ;
};
exports.restoreCategory = restoreCategory;
//# sourceMappingURL=categories.controller.js.map
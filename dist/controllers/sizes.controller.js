"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restoreSize = exports.hardDeleteSize = exports.softDeleteSize = exports.updateSize = exports.createSize = void 0;
const classes_1 = require("../classes");
const sizes_model_1 = require("../models/sizes.model");
const soft_delete_1 = require("../utils/soft-delete");
const hard_delete_1 = require("../utils/hard-delete");
const restore_1 = require("../utils/restore");
const get_user_1 = require("../utils/get-user");
const createSize = async (req, res, next) => {
    try {
        const { name } = req.body;
        const isExsits = await sizes_model_1.SIZES_MODEL.findOne({ name });
        const userCreatedSize = await (0, get_user_1.GET_USER)(req);
        if (userCreatedSize instanceof Error)
            throw new Error(userCreatedSize.message);
        if (isExsits) {
            if (isExsits.isDeleted)
                throw new Error("This size is deleted , check it");
            throw new classes_1.CustomValidationError(409, {
                name: "This name applied in another size"
            });
        }
        ;
        const newSize = await sizes_model_1.SIZES_MODEL.create({
            ...req.body,
            createdBy: {
                name: userCreatedSize.fullName,
                email: userCreatedSize.email
            }
        });
        return res.status(201).json({
            data: newSize
        });
    }
    catch (error) {
        next(error);
    }
    ;
};
exports.createSize = createSize;
const updateSize = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, status } = req.body;
        // get the size for the session ( user ) is getting it 
        const thisSize = await sizes_model_1.SIZES_MODEL.findById(id);
        const userUpdatedSize = await (0, get_user_1.GET_USER)(req);
        if (userUpdatedSize instanceof Error)
            throw new Error(userUpdatedSize.message);
        if (!thisSize) {
            throw new Error("Size not found!");
        }
        ;
        // see if there is name === the name user updated by 
        if (name && name !== thisSize.name) {
            const anotherSizeWithThisName = await sizes_model_1.SIZES_MODEL.exists({
                name,
                _id: { $ne: id },
                isDeleted: false
            });
            if (anotherSizeWithThisName) {
                throw new classes_1.CustomValidationError(409, {
                    name: "This name exists in another size"
                });
            }
            ;
        }
        ;
        thisSize.set({
            name: name,
            status: status,
            updatedBy: userUpdatedSize.fullName
        });
        // save this size new data after checking all data 
        await thisSize.save();
        return res.status(200).json(thisSize.toObject());
    }
    catch (error) {
        next(error);
    }
    ;
};
exports.updateSize = updateSize;
const softDeleteSize = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userDeletedSize = await (0, get_user_1.GET_USER)(req);
        if (userDeletedSize instanceof Error)
            throw new Error(userDeletedSize.message);
        const softDeleted = await (0, soft_delete_1.softDeleteUtility)(id, sizes_model_1.SIZES_MODEL, "size", userDeletedSize);
        return res.status(200).json({
            message: `${softDeleted.name} soft deleted successfully`
        });
    }
    catch (error) {
        next(error);
    }
};
exports.softDeleteSize = softDeleteSize;
const hardDeleteSize = async (req, res, next) => {
    try {
        const { id } = req.params;
        const hardDeleted = await (0, hard_delete_1.hardDeleteUtility)(id, sizes_model_1.SIZES_MODEL, "size");
        return res.status(200).json({
            message: `${hardDeleted.name} deleted forever successfully`
        });
    }
    catch (error) {
        next(error);
    }
    ;
};
exports.hardDeleteSize = hardDeleteSize;
const restoreSize = async (req, res, next) => {
    try {
        const { id } = req.params;
        const restored = await (0, restore_1.restoreUtility)(id, sizes_model_1.SIZES_MODEL, "size");
        return res.status(200).json({
            message: `${restored.name} restored successfully`
        });
    }
    catch (error) {
        next(error);
    }
    ;
};
exports.restoreSize = restoreSize;
//# sourceMappingURL=sizes.controller.js.map
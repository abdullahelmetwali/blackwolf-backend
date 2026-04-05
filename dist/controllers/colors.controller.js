"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restoreColor = exports.hardDeleteColor = exports.softDeleteColor = exports.updateColor = exports.createColor = void 0;
const classes_1 = require("../classes");
const colors_model_1 = require("../models/colors.model");
const soft_delete_1 = require("../utils/soft-delete");
const hard_delete_1 = require("../utils/hard-delete");
const restore_1 = require("../utils/restore");
const get_user_1 = require("../utils/get-user");
const createColor = async (req, res, next) => {
    try {
        const { name, value } = req.body;
        const isExsits = await colors_model_1.COLORS_MODEL.findOne({ name, value });
        const userCreatedColor = await (0, get_user_1.GET_USER)(req);
        if (userCreatedColor instanceof Error)
            throw new Error(userCreatedColor.message);
        if (isExsits) {
            if (isExsits.isDeleted)
                throw new Error("This color is deleted , check it");
            const errors = {
                ...(isExsits.isDeleted ? { name: "This color is deleted , check it" } : {}),
                ...(isExsits.name && name ? { name: "This name already exists" } : {}),
                ...(isExsits.value && value ? { value: "This value already exists" } : {}),
            };
            throw new classes_1.CustomValidationError(409, errors);
        }
        ;
        const newColor = await colors_model_1.COLORS_MODEL.create({
            ...req.body,
            createdBy: {
                name: userCreatedColor.fullName,
                email: userCreatedColor.email
            }
        });
        return res.status(201).json({
            data: newColor
        });
    }
    catch (error) {
        next(error);
    }
    ;
};
exports.createColor = createColor;
const updateColor = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, status, value } = req.body;
        const thisColor = await colors_model_1.COLORS_MODEL.findById(id);
        if (!thisColor) {
            throw new Error("Color not found!");
        }
        ;
        const userUpdatedColor = await (0, get_user_1.GET_USER)(req);
        if (userUpdatedColor instanceof Error)
            throw new Error(userUpdatedColor.message);
        // see if there is name or value applied in another color
        if ((name && name !== thisColor.name) || (value && value !== thisColor.value)) {
            const duplicated = await colors_model_1.COLORS_MODEL.findOne({
                _id: { $ne: id },
                isDeleted: false,
                $or: [
                    { name },
                    { value }
                ]
            });
            if (duplicated) {
                if (duplicated.name === name)
                    throw new classes_1.CustomValidationError(409, { name: "This name exists in another color" });
                if (duplicated.value === value)
                    throw new classes_1.CustomValidationError(409, { value: "This value exists in another color" });
            }
        }
        ;
        thisColor.set({
            name: name,
            value: value,
            status: status || thisColor.status,
            updatedBy: userUpdatedColor.fullName
        });
        await thisColor.save();
        return res.status(200).json({
            data: thisColor.toObject()
        });
    }
    catch (error) {
        next(error);
    }
    ;
};
exports.updateColor = updateColor;
const softDeleteColor = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userDeletedColor = await (0, get_user_1.GET_USER)(req);
        if (userDeletedColor instanceof Error)
            throw new Error(userDeletedColor.message);
        const softDeleted = await (0, soft_delete_1.softDeleteUtility)(id, colors_model_1.COLORS_MODEL, "color", userDeletedColor);
        return res.status(200).json({
            message: `${softDeleted.name} soft deleted successfully`
        });
    }
    catch (error) {
        next(error);
    }
};
exports.softDeleteColor = softDeleteColor;
const hardDeleteColor = async (req, res, next) => {
    try {
        const { id } = req.params;
        const hardDeleted = await (0, hard_delete_1.hardDeleteUtility)(id, colors_model_1.COLORS_MODEL, "color");
        return res.status(200).json({
            message: `${hardDeleted.name} deleted forever successfully`
        });
    }
    catch (error) {
        next(error);
    }
    ;
};
exports.hardDeleteColor = hardDeleteColor;
const restoreColor = async (req, res, next) => {
    try {
        const { id } = req.params;
        const restored = await (0, restore_1.restoreUtility)(id, colors_model_1.COLORS_MODEL, "color");
        return res.status(200).json({
            message: `${restored.name} restored successfully`
        });
    }
    catch (error) {
        next(error);
    }
    ;
};
exports.restoreColor = restoreColor;
//# sourceMappingURL=colors.controller.js.map
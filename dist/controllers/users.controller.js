"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.restoreUser = exports.hardDeleteUser = exports.softDeleteUser = exports.updateUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const classes_1 = require("../classes");
const users_model_1 = require("../models/users.model");
const get_user_1 = require("../utils/get-user");
const soft_delete_1 = require("../utils/soft-delete");
const hard_delete_1 = require("../utils/hard-delete");
const restore_1 = require("../utils/restore");
const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { firstName, lastName, email, password, role, gender } = req.body;
        const userToUpdate = await users_model_1.USERS_MODEL.findById(id);
        if (!userToUpdate)
            throw new Error("User not found!");
        let errors = {};
        let hashedPassword;
        const sameUser = await users_model_1.USERS_MODEL.findOne({ _id: { $ne: id }, email });
        if (sameUser?.email === email)
            errors.email = "This email has been used before";
        if (password) {
            const isMatch = await bcryptjs_1.default.compare(password, userToUpdate.password);
            if (!isMatch) {
                errors.password = "Invalid password";
                return;
            }
            const salt = await bcryptjs_1.default.genSalt();
            hashedPassword = await bcryptjs_1.default.hash(password, salt);
        }
        if (Object.keys(errors).length > 0)
            throw new classes_1.CustomValidationError(409, errors);
        userToUpdate.set({
            firstName,
            lastName,
            email,
            role,
            gender,
        });
    }
    catch (error) {
    }
};
exports.updateUser = updateUser;
const softDeleteUser = async (req, res, next) => {
    try {
        const userWhoDelete = await (0, get_user_1.GET_USER)(req);
        if (userWhoDelete instanceof Error)
            throw new Error(userWhoDelete?.message);
        const softDeletedUser = await (0, soft_delete_1.softDeleteUtility)(req.params.id, users_model_1.USERS_MODEL, "user", userWhoDelete);
        return res.status(200).json({
            message: `${softDeletedUser.name} soft deleted successfully`
        });
    }
    catch (error) {
        next(error);
    }
};
exports.softDeleteUser = softDeleteUser;
const hardDeleteUser = async (req, res, next) => {
    try {
        const hardDeletedUser = await (0, hard_delete_1.hardDeleteUtility)(req.params.id, users_model_1.USERS_MODEL, "user");
        return res.status(200).json({
            message: `${hardDeletedUser.name} deleted forever successfully`
        });
    }
    catch (error) {
        next(error);
    }
};
exports.hardDeleteUser = hardDeleteUser;
const restoreUser = async (req, res, next) => {
    try {
        const restored = await (0, restore_1.restoreUtility)(req.params.id, users_model_1.USERS_MODEL, "user");
        return res.status(200).json({
            message: `${restored.name} restored successfully`
        });
    }
    catch (error) {
        next(error);
    }
    ;
};
exports.restoreUser = restoreUser;
//# sourceMappingURL=users.controller.js.map
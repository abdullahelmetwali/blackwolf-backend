import bcrypto from "bcryptjs";

import { UserTypo } from "../types";
import { CustomValidationError } from "../classes";
import { Request, Response, NextFunction } from "express";

import { USERS_MODEL } from "../models/users.model";
import { GET_USER } from "../utils/get-user";
import { softDeleteUtility } from "../utils/soft-delete";
import { hardDeleteUtility } from "../utils/hard-delete";
import { restoreUtility } from "../utils/restore";

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { firstName, lastName, email, password, role, gender } = req.body as UserTypo;

        const userToUpdate = await USERS_MODEL.findById(id);
        if (!userToUpdate) throw new Error("User not found!");

        let errors: Record<string, string> = {};

        let hashedPassword: any;

        const sameUser = await USERS_MODEL.findOne({ _id: { $ne: id }, email });
        if (sameUser?.email === email) errors.email = "This email has been used before";

        if (password) {
            const isMatch = await bcrypto.compare(password, userToUpdate.password)
            if (!isMatch) {
                errors.password = "Invalid password";
                return;
            }

            const salt = await bcrypto.genSalt();
            hashedPassword = await bcrypto.hash(password, salt);
        }

        if (Object.keys(errors).length > 0) throw new CustomValidationError(409, errors);

        userToUpdate.set({
            firstName,
            lastName,
            email,
            role,
            gender,
        })
    } catch (error) {

    }
};

export const softDeleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userWhoDelete = await GET_USER(req);
        if (userWhoDelete instanceof Error) throw new Error(userWhoDelete?.message);

        const softDeletedUser = await softDeleteUtility(req.params.id, USERS_MODEL, "user", userWhoDelete);
        return res.status(200).json({
            message: `${softDeletedUser.name} soft deleted successfully`
        });
    } catch (error) {
        next(error);
    }
};

export const hardDeleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const hardDeletedUser = await hardDeleteUtility(req.params.id, USERS_MODEL, "user");
        return res.status(200).json({
            message: `${hardDeletedUser.name} deleted forever successfully`
        });
    } catch (error) {
        next(error);
    }
};

export const restoreUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const restored = await restoreUtility(req.params.id, USERS_MODEL, "user");
        return res.status(200).json({
            message: `${restored.name} restored successfully`
        });
    } catch (error) {
        next(error);
    };
};
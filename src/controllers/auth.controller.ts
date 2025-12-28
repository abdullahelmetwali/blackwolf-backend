// controller play as a func to make logic in it
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { startSession } from "mongoose";

import { USERS } from "@/models/users.model";
import { JWT_EXPIRES_IN, JWT_SECRET } from "@/config/env";

export const signUp = async (req: Request, res: Response, next: NextFunction) => {
    const session = await startSession();
    session.startTransaction();
    try {
        const { email, name, password } = req.body;

        // check if user exists , to avoid making the whole logic
        const isExisting = await USERS.findOne({ email });

        if (isExisting) {
            const err: any = new Error("User already exists");
            err.name = "CustomValidationError";
            err.errors = { email: "Email is already token" }
            err.statusCode = 409;
            throw err;
        };

        // hash passsword for security
        const salt = await bcrypt.genSalt(2);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user , here mongoose will also validate (required, minlength, etc.)
        const newUser = await USERS.create(
            [{ name, email, password: hashedPassword }],
            { session }
        );

        if (!newUser[0] || !JWT_SECRET || !JWT_EXPIRES_IN) {
            throw new Error("User creation failed");
        };

        const token = jwt.sign(
            { userId: newUser[0].id },
            JWT_SECRET,
            // expires in seconds
            { expiresIn: Number(JWT_EXPIRES_IN) || 3600 }
        );

        await session.commitTransaction();

        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: {
                token,
                user: newUser[0]
            }
        })
    } catch (error) {
        await session.abortTransaction();
        next(error);
    } finally {
        session.endSession();
    }
};

export const signIn = async (req: Request, res: Response) => {

};

export const signOut = async (req: Request, res: Response) => {

};
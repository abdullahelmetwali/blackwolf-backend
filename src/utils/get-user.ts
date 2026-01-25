import jwt from "jsonwebtoken";
import { Request } from "express";
import { UserTypo } from "../types";
import { JWT_SECRET } from "../config/env";
import { USERS_MODEL } from "../models/users.model";

export const GET_USER: (req: Request) => Promise<UserTypo | Error> = async (req) => {
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
        return new Error("Token not found");
    };

    try {
        const decoded: any = await jwt.verify(token, JWT_SECRET as string);

        if (!decoded || !decoded.userId) {
            throw new Error("Invlaid token");
        }

        const userID = decoded.userId;
        const user = await USERS_MODEL.findById(userID) as UserTypo

        return user;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "An unknown error occurred");
    }
};

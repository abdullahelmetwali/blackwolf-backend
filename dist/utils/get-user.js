"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_USER = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../config/env");
const users_model_1 = require("../models/users.model");
const GET_USER = async (req) => {
    const AUTHORIZATION = req.header("Authorization");
    if (!AUTHORIZATION) {
        return new Error("Authorization header not found");
    }
    const token = AUTHORIZATION.split(" ")[1];
    if (!token || token === "undefined" || token === "null" || token.trim() === "") {
        return new Error("Token not found");
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, env_1.JWT_SECRET);
        if (!decoded || !decoded.userId) {
            return new Error("Invalid token");
        }
        const userID = decoded.userId;
        const user = await users_model_1.USERS_MODEL.findById(userID);
        if (!user) {
            return new Error("User not found!");
        }
        delete user.password;
        return user;
    }
    catch (error) {
        if (error instanceof jsonwebtoken_1.default.TokenExpiredError) {
            return new Error("Token expired");
        }
        if (error instanceof jsonwebtoken_1.default.JsonWebTokenError) {
            return new Error("Invalid or malformed token");
        }
        return new Error(error instanceof Error ? error.message : "An unknown error occurred");
    }
};
exports.GET_USER = GET_USER;
//# sourceMappingURL=get-user.js.map
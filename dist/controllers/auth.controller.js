"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.logIn = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../config/env");
const classes_1 = require("../classes");
const users_model_1 = require("../models/users.model");
const get_user_1 = require("../utils/get-user");
const logIn = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await users_model_1.USERS_MODEL.findOne({ email }).select("+password");
        if (!user) {
            throw new classes_1.CustomValidationError(409, { message: "Invalid email or password" });
        }
        ;
        const isMatch = await bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            throw new classes_1.CustomValidationError(409, { message: "Invalid email or password" });
        }
        ;
        if (!env_1.JWT_SECRET) {
            const err = new Error("Token Invalid");
            err.name = "JsonWebTokenError";
            throw err;
        }
        ;
        const token = jsonwebtoken_1.default.sign({ userId: user._id, role: user.role }, env_1.JWT_SECRET, { expiresIn: Number(env_1.JWT_EXPIRES_IN) * 365 || (86400 * 365) });
        return res.status(200).json({
            data: {
                token,
                user
            }
        });
    }
    catch (error) {
        next(error);
    }
};
exports.logIn = logIn;
const register = async (req, res, next) => {
    try {
        const { email, firstName, lastName, password, phone, role, gender, } = req.body;
        // check if user exists , to avoid making the whole logic
        const isExisting = await users_model_1.USERS_MODEL.findOne({ email, phone });
        const passswordLength = password.length < 12;
        let errors = {};
        if (isExisting?.email)
            errors.email = "Email is already token before";
        if (isExisting?.phone)
            errors.phone = "Phone is already token before";
        if (!gender)
            errors.gender = "Please select your gender";
        if (passswordLength)
            errors.password = "Password must be more than 12 letters";
        if (Object.keys(errors).length > 0) {
            throw new classes_1.CustomValidationError(409, errors);
        }
        // hash passsword for security
        const salt = await bcryptjs_1.default.genSalt();
        const hashedPassword = await bcryptjs_1.default.hash(password, salt);
        const createdUser = await (0, get_user_1.GET_USER)(req) || null;
        const newUser = await users_model_1.USERS_MODEL.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: String(phone),
            role: role,
            password: hashedPassword,
            createdBy: {
                name: (createdUser instanceof Error || !createdUser) ? "Unknown" : createdUser.fullName,
                email: (createdUser instanceof Error || !createdUser) ? "Unknown" : createdUser.email
            }
        });
        if (!newUser || !env_1.JWT_SECRET || !env_1.JWT_EXPIRES_IN) {
            throw new Error("User creation failed");
        }
        ;
        const token = jsonwebtoken_1.default.sign({ userId: newUser._id, role: role }, env_1.JWT_SECRET, 
        // expires in seconds
        { expiresIn: Number(env_1.JWT_EXPIRES_IN) || 3600 });
        const userObject = newUser.toObject();
        return res.status(201).json({
            data: {
                token,
                user: userObject
            }
        });
    }
    catch (error) {
        next(error);
    }
};
exports.register = register;
//# sourceMappingURL=auth.controller.js.map
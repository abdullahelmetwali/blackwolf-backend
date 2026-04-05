"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_model_1 = require("../models/users.model");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const get_user_1 = require("../utils/get-user");
const auth_controller_1 = require("../controllers/auth.controller");
const users_controller_1 = require("../controllers/users.controller");
const USERS_ROUTE = (0, express_1.Router)();
// GET all users => /users
// GET user bg id => /users/:id
USERS_ROUTE.get("/", async (_, res) => {
    try {
        // .lean() -> plain JS objects
        // const users = await USERS_MODEL.deleteMany({}).lean()
        const users = await users_model_1.USERS_MODEL.find({}, { password: 0 }).lean();
        return res.status(200).json({ data: users });
    }
    catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
});
// admin
USERS_ROUTE.get("/dashboard", async (req, res) => {
    try {
        const user = await (0, get_user_1.GET_USER)(req);
        if (user instanceof Error)
            throw new Error(user?.message);
        if (user?.role !== "admin")
            throw new Error("You are not authorized to access this route");
        return res.status(200).json({ data: user });
    }
    catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
});
// user
USERS_ROUTE.get("/profile", async (req, res) => {
    try {
        const user = await (0, get_user_1.GET_USER)(req);
        if (user instanceof Error)
            throw new Error(user?.message);
        return res.status(200).json({ data: user });
    }
    catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
});
USERS_ROUTE.get("/:id", (req, res) => res.send({ message: `Get user details for` }));
USERS_ROUTE.post("/", auth_middleware_1.AUTH_MIDDLEWARE, auth_controller_1.register);
USERS_ROUTE.delete("/soft/:id", auth_middleware_1.AUTH_MIDDLEWARE, users_controller_1.softDeleteUser);
USERS_ROUTE.delete("/hard/:id", auth_middleware_1.AUTH_MIDDLEWARE, users_controller_1.hardDeleteUser);
USERS_ROUTE.delete("/restore/:id", auth_middleware_1.AUTH_MIDDLEWARE, users_controller_1.restoreUser);
exports.default = USERS_ROUTE;
//# sourceMappingURL=users.route.js.map
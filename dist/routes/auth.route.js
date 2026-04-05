"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// auth.route is for making the routes frontend fetch on it
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const AUTH_ROUTE = (0, express_1.Router)();
AUTH_ROUTE.post("/login", auth_controller_1.logIn);
AUTH_ROUTE.post("/register", auth_controller_1.register);
exports.default = AUTH_ROUTE;
//# sourceMappingURL=auth.route.js.map
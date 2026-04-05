"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cart_controller_1 = require("../controllers/cart.controller");
const CART_ROUTER = (0, express_1.Router)();
CART_ROUTER.post("/", cart_controller_1.addToCart);
CART_ROUTER.get("/", cart_controller_1.getCart);
CART_ROUTER.delete("/:id", cart_controller_1.removeFromCart);
exports.default = CART_ROUTER;
//# sourceMappingURL=cart.route.js.map
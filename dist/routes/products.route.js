"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const upload_middleware_1 = require("../middlewares/upload.middleware");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const products_model_1 = require("../models/products.model");
const products_controller_1 = require("../controllers/products.controller");
const PRODUCTS_ROUTE = (0, express_1.Router)();
// all products (not deleted) 
PRODUCTS_ROUTE.get("/", products_controller_1.filterProucts);
// get product
PRODUCTS_ROUTE.get("/:identifier", products_controller_1.getProduct);
// deleted products
PRODUCTS_ROUTE.get("/deleted", auth_middleware_1.AUTH_MIDDLEWARE, async (_, res) => {
    try {
        const products = await products_model_1.PRODUCTS_MODEL.find({ isDeleted: true }).lean();
        return res.json({
            data: products
        });
    }
    catch (error) {
        return res.json({
            error: error?.message
        });
    }
});
// create product 
PRODUCTS_ROUTE.post("/", auth_middleware_1.AUTH_MIDDLEWARE, (0, upload_middleware_1.uploadSingle)("image"), products_controller_1.createProduct);
// update product
PRODUCTS_ROUTE.put("/:id", auth_middleware_1.AUTH_MIDDLEWARE, (0, upload_middleware_1.uploadSingle)("image"), products_controller_1.updateProduct);
// soft delete
PRODUCTS_ROUTE.delete("/soft/:id", auth_middleware_1.AUTH_MIDDLEWARE, products_controller_1.softDeleteProduct);
// hard delete
PRODUCTS_ROUTE.delete("/hard/:id", auth_middleware_1.AUTH_MIDDLEWARE, products_controller_1.hardDeleteProduct);
// restore category
PRODUCTS_ROUTE.patch("/restore/:id", auth_middleware_1.AUTH_MIDDLEWARE, products_controller_1.restoreProduct);
exports.default = PRODUCTS_ROUTE;
//# sourceMappingURL=products.route.js.map
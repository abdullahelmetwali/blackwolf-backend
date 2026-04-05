"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const categories_model_1 = require("../models/categories.model");
const categories_controller_1 = require("../controllers/categories.controller");
const CATEGORIES_ROUTE = (0, express_1.Router)();
// all categories 
CATEGORIES_ROUTE.get("/", async (_, res) => {
    try {
        // const categories = await CATEGORIES_MODEL.deleteMany({}).lean();
        const categories = await categories_model_1.CATEGORIES_MODEL.find({ isDeleted: false }).lean();
        return res.status(200).json({ data: categories });
    }
    catch (error) {
        return res.status(500).json({
            error: error?.message
        });
    }
});
// deleted categories
CATEGORIES_ROUTE.get("/deleted", auth_middleware_1.AUTH_MIDDLEWARE, async (_, res) => {
    try {
        const categories = await categories_model_1.CATEGORIES_MODEL.find({ isDeleted: true }).lean();
        return res.json({
            data: categories
        });
    }
    catch (error) {
        return res.status(500).json({
            error: error?.message
        });
    }
});
// create category
CATEGORIES_ROUTE.post("/", auth_middleware_1.AUTH_MIDDLEWARE, categories_controller_1.createCategory);
// update category
CATEGORIES_ROUTE.put("/:id", auth_middleware_1.AUTH_MIDDLEWARE, categories_controller_1.updateCategory);
// soft delete
CATEGORIES_ROUTE.delete("/soft/:id", auth_middleware_1.AUTH_MIDDLEWARE, categories_controller_1.softDeleteCategory);
// hard delete
CATEGORIES_ROUTE.delete("/hard/:id", auth_middleware_1.AUTH_MIDDLEWARE, categories_controller_1.hardDeleteCategory);
// restore category
CATEGORIES_ROUTE.patch("/restore/:id", auth_middleware_1.AUTH_MIDDLEWARE, categories_controller_1.restoreCategory);
exports.default = CATEGORIES_ROUTE;
//# sourceMappingURL=categories.route.js.map
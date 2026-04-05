"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const sizes_model_1 = require("../models/sizes.model");
const sizes_controller_1 = require("../controllers/sizes.controller");
const SIZES_ROUTE = (0, express_1.Router)();
// all sizes
SIZES_ROUTE.get("/", async (_, res) => {
    try {
        // const sizes = await SIZES_MODEL.deleteMany({}).lean();
        const sizes = await sizes_model_1.SIZES_MODEL.find({ isDeleted: false }).lean();
        return res.status(200).json({ data: sizes });
    }
    catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
});
// deleted sizes
SIZES_ROUTE.get("/deleted", auth_middleware_1.AUTH_MIDDLEWARE, async (_, res) => {
    try {
        const sizes = await sizes_model_1.SIZES_MODEL.find({
            isDeleted: true
        }).lean();
        return res.status(200).json({
            data: [
                ...sizes
            ],
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
});
// create new size
SIZES_ROUTE.post("/", auth_middleware_1.AUTH_MIDDLEWARE, sizes_controller_1.createSize);
// update size
SIZES_ROUTE.put("/:id", auth_middleware_1.AUTH_MIDDLEWARE, sizes_controller_1.updateSize);
// soft delete
SIZES_ROUTE.delete("/soft/:id", auth_middleware_1.AUTH_MIDDLEWARE, sizes_controller_1.softDeleteSize);
// hard delete
SIZES_ROUTE.delete("/hard/:id", auth_middleware_1.AUTH_MIDDLEWARE, sizes_controller_1.hardDeleteSize);
// restore size
SIZES_ROUTE.patch("/restore/:id", auth_middleware_1.AUTH_MIDDLEWARE, sizes_controller_1.restoreSize);
exports.default = SIZES_ROUTE;
//# sourceMappingURL=sizes.route.js.map
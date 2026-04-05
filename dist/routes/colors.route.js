"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const colors_model_1 = require("../models/colors.model");
const colors_controller_1 = require("../controllers/colors.controller");
const COLORS_ROUTE = (0, express_1.Router)();
// all color 
COLORS_ROUTE.get("/", async (_, res) => {
    try {
        // const colors = await COLORS_MODEL.deleteMany({}).lean();
        const colors = await colors_model_1.COLORS_MODEL.find({ isDeleted: false }).lean();
        return res.status(200).json({ data: colors });
    }
    catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
});
// deleted colors
COLORS_ROUTE.get("/deleted", auth_middleware_1.AUTH_MIDDLEWARE, async (_, res) => {
    try {
        const colors = await colors_model_1.COLORS_MODEL.find({ isDeleted: true }).lean();
        return res.status(200).json({
            data: [
                ...colors
            ]
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
});
// create new color
COLORS_ROUTE.post("/", auth_middleware_1.AUTH_MIDDLEWARE, colors_controller_1.createColor);
// update color
COLORS_ROUTE.put("/:id", auth_middleware_1.AUTH_MIDDLEWARE, colors_controller_1.updateColor);
// soft delete
COLORS_ROUTE.delete("/soft/:id", auth_middleware_1.AUTH_MIDDLEWARE, colors_controller_1.softDeleteColor);
// hard delete
COLORS_ROUTE.delete("/hard/:id", auth_middleware_1.AUTH_MIDDLEWARE, colors_controller_1.hardDeleteColor);
// restore color
COLORS_ROUTE.patch("/restore/:id", auth_middleware_1.AUTH_MIDDLEWARE, colors_controller_1.restoreColor);
exports.default = COLORS_ROUTE;
//# sourceMappingURL=colors.route.js.map
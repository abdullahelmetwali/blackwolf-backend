"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INVENTORY_MODEL = void 0;
const mongoose_1 = require("mongoose");
const InventorySchema = new mongoose_1.Schema({}, {
    timestamps: true,
});
exports.INVENTORY_MODEL = (0, mongoose_1.model)("Inventory", InventorySchema);
//# sourceMappingURL=inventory.model.js.map
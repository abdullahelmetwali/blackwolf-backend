import { model, Schema } from "mongoose"

const InventorySchema = new Schema({

}, {
    timestamps: true,
});

export const INVENTORY_MODEL = model("Inventory", InventorySchema)
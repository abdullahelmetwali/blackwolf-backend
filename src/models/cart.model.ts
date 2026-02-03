import { Schema, model } from "mongoose";

const CartSchema = new Schema({
    product: {
        _id: { type: String, required: true },
        name: { type: String, required: true },
        image: { type: String, required: true },
    },
    quantity: {
        type: Number,
        required: true
    },
    size: {
        _id: { type: String, required: true },
        name: { type: String, required: true },
    },
    color: {
        _id: { type: String, required: true },
        name: { type: String, required: true },
    }
}, {
    timestamps: true,
    versionKey: false
});

export const CART_MODEL = model("Cart", CartSchema);
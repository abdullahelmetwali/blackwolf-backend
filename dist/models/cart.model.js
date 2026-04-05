"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CART_MODEL = void 0;
const mongoose_1 = require("mongoose");
const CartSchema = new mongoose_1.Schema({
    user: {
        _id: { type: mongoose_1.Types.ObjectId, ref: "Users" },
        name: { type: String, required: [true, "User name is required"] },
        email: { type: String, required: [true, "User email is required"] },
    },
    items: [
        {
            product: {
                _id: { type: mongoose_1.Schema.Types.ObjectId, ref: "Products" },
                name: { type: String, required: [true, "Product name is required"] },
                image: { type: String, required: [true, "Product image is required"] },
                price: { type: Number, required: [true, "Product price is required"] },
                oldPrice: { type: Number },
                discount: { type: Number },
            },
            size: {
                type: String,
                required: [true, "Size is required"]
            },
            color: {
                type: String,
                required: [true, "Color is required"]
            },
            quantity: {
                type: Number,
                max: 15,
                min: 1,
                required: [true, "Quantity is required"]
            },
        }
    ],
}, {
    timestamps: true,
    versionKey: false
});
exports.CART_MODEL = (0, mongoose_1.model)("Cart", CartSchema);
//# sourceMappingURL=cart.model.js.map
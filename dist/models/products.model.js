"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCTS_MODEL = void 0;
const mongoose_1 = require("mongoose");
const make_slug_1 = require("../utils/make-slug");
const ProductSchema = new mongoose_1.Schema({
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    name: {
        type: String,
        trim: true,
        required: [true, "Product name is required"]
    },
    description: {
        type: String,
        default: "",
        maxLength: [250, "Max letters for description is 250 letter only"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        validate: {
            validator: (v) => !isNaN(Number(v)),
            message: "Price must be a valid number"
        },
    },
    oldPrice: {
        type: Number,
        default: 0,
        validate: {
            validator: (v) => !isNaN(Number(v)),
            message: "Old price must be a valid number"
        },
    },
    discount: {
        type: Number,
        default: 0,
        min: 0,
        max: 100,
        validate: {
            validator: (v) => !isNaN(Number(v)),
            message: "Discount must be a number between 0 and 100"
        },
    },
    inStock: {
        type: Number,
        required: [true, "Number of stocks is required"],
        validate: {
            validator: (v) => Number(v),
        },
    },
    reviews: {
        type: [
            {
                user: { type: mongoose_1.Schema.Types.ObjectId, ref: "Users", required: true },
                rating: { type: Number, min: 1, max: 5, required: true },
                comment: { type: String, default: "" },
                createdAt: { type: Date, default: Date.now() }
            }
        ],
        default: []
    },
    image: {
        type: String,
        default: null,
        required: [true, "Product image is required"]
    },
    categories: {
        type: [{ _id: { type: String }, name: { type: String } }],
        set: (v) => Array.isArray(v) ? v : [v],
        validate: {
            validator: (v) => v.length > 0,
            message: "At least choose one category"
        },
        required: true
    },
    sizes: {
        type: [{ _id: { type: String }, name: { type: String } }],
        set: (v) => Array.isArray(v) ? v : [v],
        validate: {
            validator: (v) => v.length > 0,
            message: "At least choose one size"
        },
        required: true
    },
    colors: {
        type: [{ _id: { type: String }, name: { type: String } }],
        set: (v) => Array.isArray(v) ? v : [v],
        validate: {
            validator: (v) => v.length > 0,
            message: "At least choose one color"
        },
        required: true
    },
    status: {
        type: String,
        enum: ["0", "1"],
        default: "1",
        required: [true, "Product status must be added"]
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    deletedAt: {
        type: Date,
        default: null
    },
    deletedBy: {
        name: {
            type: String
        },
        email: {
            type: String
        },
    },
    createdBy: {
        name: {
            type: String
        },
        email: {
            type: String
        },
    },
    updatedBy: {
        name: {
            type: String
        },
        email: {
            type: String
        },
    },
}, {
    timestamps: true,
    versionKey: false,
});
// discount and price
ProductSchema.pre("save", async function () {
    if (!this.isNew && !this.isModified("discount") && !this.isModified("price")) {
        return;
    }
    ;
    if (this.discount && this.discount > 0) {
        const discountAmount = (this.price * Number(this.discount)) / 100;
        this.oldPrice = this.price;
        this.price = this.price - discountAmount;
    }
    ;
});
// slug
ProductSchema.pre("save", async function () {
    if (!this.isNew && !this.isModified("name"))
        return;
    this.slug = await (0, make_slug_1.makeSlug)(this.name, this.constructor);
});
exports.PRODUCTS_MODEL = (0, mongoose_1.model)("Products", ProductSchema);
//# sourceMappingURL=products.model.js.map
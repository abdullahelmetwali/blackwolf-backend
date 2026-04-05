"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CATEGORIES_MODEL = void 0;
const make_slug_1 = require("../utils/make-slug");
const mongoose_1 = require("mongoose");
const CategorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        required: [true, "Category name is required"]
    },
    slug: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
    },
    status: {
        type: String,
        enum: ["0", "1"],
        default: "1",
        required: false
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
            type: String,
        },
        email: {
            type: String,
        }
    },
    createdBy: {
        name: {
            type: String,
        },
        email: {
            type: String,
        }
    },
    updatedBy: {
        name: {
            type: String,
        },
        email: {
            type: String,
        }
    },
}, {
    timestamps: true,
    versionKey: false
});
CategorySchema.pre("save", async function () {
    if (!this.isNew && !this.isModified("name"))
        return;
    this.slug = await (0, make_slug_1.makeSlug)(this.name, this.constructor);
});
exports.CATEGORIES_MODEL = (0, mongoose_1.model)("Categories", CategorySchema);
//# sourceMappingURL=categories.model.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLORS_MODEL = void 0;
const make_slug_1 = require("../utils/make-slug");
const mongoose_1 = require("mongoose");
const ColorSchema = new mongoose_1.Schema({
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    name: {
        type: String,
        unique: true,
        required: [true, "Color name is required"]
    },
    value: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: [true, "Color value is required"]
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
ColorSchema.pre("save", async function () {
    if (!this.isNew && !this.isModified("name"))
        return;
    this.slug = await (0, make_slug_1.makeSlug)(this.name, this.constructor);
});
exports.COLORS_MODEL = (0, mongoose_1.model)("Colors", ColorSchema);
//# sourceMappingURL=colors.model.js.map
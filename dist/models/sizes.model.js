"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SIZES_MODEL = void 0;
const make_slug_1 = require("../utils/make-slug");
const mongoose_1 = require("mongoose");
const SizeSchema = new mongoose_1.Schema({
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    name: {
        type: String,
        unique: true,
        required: [true, "Size name is required"]
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
        type: String,
        default: null
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
SizeSchema.pre("save", async function () {
    if (!this.isNew && !this.isModified("name"))
        return;
    this.slug = await (0, make_slug_1.makeSlug)(this.name, this.constructor);
});
exports.SIZES_MODEL = (0, mongoose_1.model)("Sizes", SizeSchema);
//# sourceMappingURL=sizes.model.js.map
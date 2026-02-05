import { makeSlug } from "../utils/make-slug";
import { model, Schema } from "mongoose";

const ColorSchema = new Schema({
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
    if (!this.isNew && !this.isModified("name")) return;
    this.slug = await makeSlug(this.name, this.constructor);
});

export const COLORS_MODEL = model("Colors", ColorSchema);
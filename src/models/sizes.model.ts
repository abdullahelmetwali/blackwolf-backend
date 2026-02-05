import { makeSlug } from "../utils/make-slug";
import { model, Schema } from "mongoose";

const SizeSchema = new Schema({
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
    if (!this.isNew && !this.isModified("name")) return;
    this.slug = await makeSlug(this.name, this.constructor);
});

export const SIZES_MODEL = model("Sizes", SizeSchema);
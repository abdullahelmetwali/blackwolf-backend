"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USERS_MODEL = void 0;
const make_slug_1 = require("../utils/make-slug");
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        index: true,
        trim: true,
    },
    firstName: {
        type: String,
        trim: true,
        required: [true, "First name is required"],
        minlength: [3, "First name length must be more than 3 letters"],
        maxlength: [100, "First name length must be less than 100 letters"],
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, "Last name is required"],
        minlength: [3, "Last name length must be more than 3 letters"],
        maxlength: [100, "Last name length must be less than 100 letters"],
    },
    fullName: {
        type: String,
        trim: true,
        required: [true, "Name is required"],
        minlength: [8, "Name length must be more than 8 letters"],
        maxlength: [200, "Name length must be less than 200 letters"],
    },
    email: {
        type: String,
        required: [true, "Email address is required"],
        trim: true,
        lowercase: true,
        minLength: 8,
        maxLength: 255,
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        validate: {
            // validate phone number
            validator: (v) => /^[0-9]{10,15}$/.test(v),
            message: "Invalid phone number format"
        }
    },
    password: {
        type: String,
        trim: true,
        required: [true, "Password is required"],
        minlength: [12, "Password length must be more than 12 letters"],
        select: false
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: false
    },
    cart: {
        type: [
            {
                product: {
                    _id: { type: mongoose_1.Schema.Types.ObjectId, required: true },
                    name: String,
                    slug: String,
                    image: String,
                    price: Number,
                    oldPrice: Number,
                    discount: Number,
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
        default: []
    },
    role: {
        type: String,
        required: [true, "User role is required"],
        enum: ["admin", "customer"],
        default: "customer"
    },
    createdBy: {
        name: {
            type: String
        },
        email: {
            type: String
        },
    }
}, {
    timestamps: true,
    versionKey: false
});
UserSchema.pre("save", async function () {
    if (!this.isNew && !this.isModified("firstName") && !this.isModified("lastName"))
        return;
    this.fullName = `${this.firstName} ${this.lastName}`;
    this.slug = await (0, make_slug_1.makeSlug)(this.fullName, this.constructor);
});
exports.USERS_MODEL = (0, mongoose_1.model)("Users", UserSchema);
//# sourceMappingURL=users.model.js.map
import { Schema, model } from "mongoose";
import slugify from "slugify";

const USER_SCHEME = new Schema({
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        index: true,
        trim: true,
    },
    name: {
        type: String,
        trim: true,
        required: [true, "Name is required"],
        minlength: [12, "Name length must be more than 12 letters"],
        maxlength: [200, "Name length must be less than 200 letters"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
        trim: true,
        lowercase: true,
        minLength: 8,
        maxLength: 255,
    },
    password: {
        type: String,
        trim: true,
        required: [true, "Password is required"],
        minlength: [12, "Password length must be more than 12 letters"],
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: false
    }
}, {
    timestamps: true,
    methods: {
        getEmail(email) {
            this.email = email
        }
    }
});

USER_SCHEME.pre("save", async function () {
    if (this.isNew || this.isModified("name")) {
        try {
            const slugOptions = {
                lower: true,
                strict: true,
                trim: true,
                locale: "en"
            };

            let slug = slugify(this.name, slugOptions);

            let isSlugExists = await USERS_MODEL.findOne({ slug });
            let counter = 1;

            // if slug exists make this loop
            while (isSlugExists) {
                slug = `${slugify(this.name, slugOptions)}-${counter}`;
                isSlugExists = await USERS_MODEL.findOne({ slug });
                counter++;
            };

            this.slug = slug;
        } catch (error) {
        }
    }
});
interface UserTypo {
    slug: string;
    name: string;
    email: string;
    password: string;
    gender: "male" | "female";
};

const USERS_MODEL = model("User", USER_SCHEME);
export { USERS_MODEL, type UserTypo };
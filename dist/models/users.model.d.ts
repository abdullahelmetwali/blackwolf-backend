import { Schema } from "mongoose";
export declare const USERS_MODEL: import("mongoose").Model<{
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    phone: string;
    password: string;
    cart: import("mongoose").Types.DocumentArray<{
        size: string;
        color: string;
        quantity: number;
        product?: {
            _id: import("mongoose").Types.ObjectId;
            slug?: string | null | undefined;
            name?: string | null | undefined;
            image?: string | null | undefined;
            price?: number | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        size: string;
        color: string;
        quantity: number;
        product?: {
            _id: import("mongoose").Types.ObjectId;
            slug?: string | null | undefined;
            name?: string | null | undefined;
            image?: string | null | undefined;
            price?: number | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }> & {
        size: string;
        color: string;
        quantity: number;
        product?: {
            _id: import("mongoose").Types.ObjectId;
            slug?: string | null | undefined;
            name?: string | null | undefined;
            image?: string | null | undefined;
            price?: number | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }>;
    role: "admin" | "customer";
    slug?: string | null | undefined;
    gender?: "male" | "female" | null | undefined;
    createdBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    phone: string;
    password: string;
    cart: import("mongoose").Types.DocumentArray<{
        size: string;
        color: string;
        quantity: number;
        product?: {
            _id: import("mongoose").Types.ObjectId;
            slug?: string | null | undefined;
            name?: string | null | undefined;
            image?: string | null | undefined;
            price?: number | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        size: string;
        color: string;
        quantity: number;
        product?: {
            _id: import("mongoose").Types.ObjectId;
            slug?: string | null | undefined;
            name?: string | null | undefined;
            image?: string | null | undefined;
            price?: number | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }> & {
        size: string;
        color: string;
        quantity: number;
        product?: {
            _id: import("mongoose").Types.ObjectId;
            slug?: string | null | undefined;
            name?: string | null | undefined;
            image?: string | null | undefined;
            price?: number | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }>;
    role: "admin" | "customer";
    slug?: string | null | undefined;
    gender?: "male" | "female" | null | undefined;
    createdBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
    versionKey: false;
}> & Omit<{
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    phone: string;
    password: string;
    cart: import("mongoose").Types.DocumentArray<{
        size: string;
        color: string;
        quantity: number;
        product?: {
            _id: import("mongoose").Types.ObjectId;
            slug?: string | null | undefined;
            name?: string | null | undefined;
            image?: string | null | undefined;
            price?: number | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        size: string;
        color: string;
        quantity: number;
        product?: {
            _id: import("mongoose").Types.ObjectId;
            slug?: string | null | undefined;
            name?: string | null | undefined;
            image?: string | null | undefined;
            price?: number | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }> & {
        size: string;
        color: string;
        quantity: number;
        product?: {
            _id: import("mongoose").Types.ObjectId;
            slug?: string | null | undefined;
            name?: string | null | undefined;
            image?: string | null | undefined;
            price?: number | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }>;
    role: "admin" | "customer";
    slug?: string | null | undefined;
    gender?: "male" | "female" | null | undefined;
    createdBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
}, "id"> & {
    id: string;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    versionKey: false;
}, {
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    phone: string;
    password: string;
    cart: import("mongoose").Types.DocumentArray<{
        size: string;
        color: string;
        quantity: number;
        product?: {
            _id: import("mongoose").Types.ObjectId;
            slug?: string | null | undefined;
            name?: string | null | undefined;
            image?: string | null | undefined;
            price?: number | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        size: string;
        color: string;
        quantity: number;
        product?: {
            _id: import("mongoose").Types.ObjectId;
            slug?: string | null | undefined;
            name?: string | null | undefined;
            image?: string | null | undefined;
            price?: number | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }> & {
        size: string;
        color: string;
        quantity: number;
        product?: {
            _id: import("mongoose").Types.ObjectId;
            slug?: string | null | undefined;
            name?: string | null | undefined;
            image?: string | null | undefined;
            price?: number | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }>;
    role: "admin" | "customer";
    slug?: string | null | undefined;
    gender?: "male" | "female" | null | undefined;
    createdBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, {
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    phone: string;
    password: string;
    cart: import("mongoose").Types.DocumentArray<{
        size: string;
        color: string;
        quantity: number;
        product?: {
            _id: import("mongoose").Types.ObjectId;
            slug?: string | null | undefined;
            name?: string | null | undefined;
            image?: string | null | undefined;
            price?: number | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        size: string;
        color: string;
        quantity: number;
        product?: {
            _id: import("mongoose").Types.ObjectId;
            slug?: string | null | undefined;
            name?: string | null | undefined;
            image?: string | null | undefined;
            price?: number | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }> & {
        size: string;
        color: string;
        quantity: number;
        product?: {
            _id: import("mongoose").Types.ObjectId;
            slug?: string | null | undefined;
            name?: string | null | undefined;
            image?: string | null | undefined;
            price?: number | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }>;
    role: "admin" | "customer";
    slug?: string | null | undefined;
    gender?: "male" | "female" | null | undefined;
    createdBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
    versionKey: false;
}>> & Omit<{
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    phone: string;
    password: string;
    cart: import("mongoose").Types.DocumentArray<{
        size: string;
        color: string;
        quantity: number;
        product?: {
            _id: import("mongoose").Types.ObjectId;
            slug?: string | null | undefined;
            name?: string | null | undefined;
            image?: string | null | undefined;
            price?: number | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        size: string;
        color: string;
        quantity: number;
        product?: {
            _id: import("mongoose").Types.ObjectId;
            slug?: string | null | undefined;
            name?: string | null | undefined;
            image?: string | null | undefined;
            price?: number | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }> & {
        size: string;
        color: string;
        quantity: number;
        product?: {
            _id: import("mongoose").Types.ObjectId;
            slug?: string | null | undefined;
            name?: string | null | undefined;
            image?: string | null | undefined;
            price?: number | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }>;
    role: "admin" | "customer";
    slug?: string | null | undefined;
    gender?: "male" | "female" | null | undefined;
    createdBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
}, "id"> & {
    id: string;
}, {
    [path: string]: import("mongoose").SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: import("mongoose").SchemaDefinitionProperty<any, any, import("mongoose").Document<unknown, {}, {
        firstName: string;
        lastName: string;
        fullName: string;
        email: string;
        phone: string;
        password: string;
        cart: import("mongoose").Types.DocumentArray<{
            size: string;
            color: string;
            quantity: number;
            product?: {
                _id: import("mongoose").Types.ObjectId;
                slug?: string | null | undefined;
                name?: string | null | undefined;
                image?: string | null | undefined;
                price?: number | null | undefined;
                oldPrice?: number | null | undefined;
                discount?: number | null | undefined;
            } | null | undefined;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
            size: string;
            color: string;
            quantity: number;
            product?: {
                _id: import("mongoose").Types.ObjectId;
                slug?: string | null | undefined;
                name?: string | null | undefined;
                image?: string | null | undefined;
                price?: number | null | undefined;
                oldPrice?: number | null | undefined;
                discount?: number | null | undefined;
            } | null | undefined;
        }> & {
            size: string;
            color: string;
            quantity: number;
            product?: {
                _id: import("mongoose").Types.ObjectId;
                slug?: string | null | undefined;
                name?: string | null | undefined;
                image?: string | null | undefined;
                price?: number | null | undefined;
                oldPrice?: number | null | undefined;
                discount?: number | null | undefined;
            } | null | undefined;
        }>;
        role: "admin" | "customer";
        slug?: string | null | undefined;
        gender?: "male" | "female" | null | undefined;
        createdBy?: {
            name?: string | null | undefined;
            email?: string | null | undefined;
        } | null | undefined;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<{
        timestamps: true;
        versionKey: false;
    }>> & Omit<{
        firstName: string;
        lastName: string;
        fullName: string;
        email: string;
        phone: string;
        password: string;
        cart: import("mongoose").Types.DocumentArray<{
            size: string;
            color: string;
            quantity: number;
            product?: {
                _id: import("mongoose").Types.ObjectId;
                slug?: string | null | undefined;
                name?: string | null | undefined;
                image?: string | null | undefined;
                price?: number | null | undefined;
                oldPrice?: number | null | undefined;
                discount?: number | null | undefined;
            } | null | undefined;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
            size: string;
            color: string;
            quantity: number;
            product?: {
                _id: import("mongoose").Types.ObjectId;
                slug?: string | null | undefined;
                name?: string | null | undefined;
                image?: string | null | undefined;
                price?: number | null | undefined;
                oldPrice?: number | null | undefined;
                discount?: number | null | undefined;
            } | null | undefined;
        }> & {
            size: string;
            color: string;
            quantity: number;
            product?: {
                _id: import("mongoose").Types.ObjectId;
                slug?: string | null | undefined;
                name?: string | null | undefined;
                image?: string | null | undefined;
                price?: number | null | undefined;
                oldPrice?: number | null | undefined;
                discount?: number | null | undefined;
            } | null | undefined;
        }>;
        role: "admin" | "customer";
        slug?: string | null | undefined;
        gender?: "male" | "female" | null | undefined;
        createdBy?: {
            name?: string | null | undefined;
            email?: string | null | undefined;
        } | null | undefined;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    phone: string;
    password: string;
    cart: import("mongoose").Types.DocumentArray<{
        size: string;
        color: string;
        quantity: number;
        product?: {
            _id: import("mongoose").Types.ObjectId;
            slug?: string | null | undefined;
            name?: string | null | undefined;
            image?: string | null | undefined;
            price?: number | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    } | {
        size: string;
        color: string;
        quantity: number;
        product?: {
            _id: string;
            slug?: string | null | undefined;
            name?: string | null | undefined;
            image?: string | null | undefined;
            price?: number | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
        _id: string;
    }, import("mongoose").Types.Subdocument<string | import("bson").ObjectId, unknown, {
        size: string;
        color: string;
        quantity: number;
        product?: {
            _id: import("mongoose").Types.ObjectId;
            slug?: string | null | undefined;
            name?: string | null | undefined;
            image?: string | null | undefined;
            price?: number | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    } | {
        size: string;
        color: string;
        quantity: number;
        product?: {
            _id: string;
            slug?: string | null | undefined;
            name?: string | null | undefined;
            image?: string | null | undefined;
            price?: number | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
        _id: string;
    }> & ({
        size: string;
        color: string;
        quantity: number;
        product?: {
            _id: import("mongoose").Types.ObjectId;
            slug?: string | null | undefined;
            name?: string | null | undefined;
            image?: string | null | undefined;
            price?: number | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    } | {
        size: string;
        color: string;
        quantity: number;
        product?: {
            _id: string;
            slug?: string | null | undefined;
            name?: string | null | undefined;
            image?: string | null | undefined;
            price?: number | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
        _id: string;
    })>;
    role: "admin" | "customer";
    slug?: string | null | undefined;
    gender?: "male" | "female" | null | undefined;
    createdBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>, {
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    phone: string;
    password: string;
    cart: import("mongoose").Types.DocumentArray<{
        size: string;
        color: string;
        quantity: number;
        product?: {
            _id: import("mongoose").Types.ObjectId;
            slug?: string | null | undefined;
            name?: string | null | undefined;
            image?: string | null | undefined;
            price?: number | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    } | {
        size: string;
        color: string;
        quantity: number;
        product?: {
            _id: string;
            slug?: string | null | undefined;
            name?: string | null | undefined;
            image?: string | null | undefined;
            price?: number | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
        _id: string;
    }, import("mongoose").Types.Subdocument<string | import("bson").ObjectId, unknown, {
        size: string;
        color: string;
        quantity: number;
        product?: {
            _id: import("mongoose").Types.ObjectId;
            slug?: string | null | undefined;
            name?: string | null | undefined;
            image?: string | null | undefined;
            price?: number | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    } | {
        size: string;
        color: string;
        quantity: number;
        product?: {
            _id: string;
            slug?: string | null | undefined;
            name?: string | null | undefined;
            image?: string | null | undefined;
            price?: number | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
        _id: string;
    }> & ({
        size: string;
        color: string;
        quantity: number;
        product?: {
            _id: import("mongoose").Types.ObjectId;
            slug?: string | null | undefined;
            name?: string | null | undefined;
            image?: string | null | undefined;
            price?: number | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    } | {
        size: string;
        color: string;
        quantity: number;
        product?: {
            _id: string;
            slug?: string | null | undefined;
            name?: string | null | undefined;
            image?: string | null | undefined;
            price?: number | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
        _id: string;
    })>;
    role: "admin" | "customer";
    slug?: string | null | undefined;
    gender?: "male" | "female" | null | undefined;
    createdBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=users.model.d.ts.map
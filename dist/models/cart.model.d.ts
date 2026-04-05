import { Schema, Types } from "mongoose";
export declare const CART_MODEL: import("mongoose").Model<{
    items: Types.DocumentArray<{
        size: string;
        color: string;
        quantity: number;
        product?: {
            name: string;
            image: string;
            price: number;
            _id?: Types.ObjectId | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }, Types.Subdocument<import("bson").ObjectId, unknown, {
        size: string;
        color: string;
        quantity: number;
        product?: {
            name: string;
            image: string;
            price: number;
            _id?: Types.ObjectId | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }> & {
        size: string;
        color: string;
        quantity: number;
        product?: {
            name: string;
            image: string;
            price: number;
            _id?: Types.ObjectId | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }>;
    user?: {
        name: string;
        email: string;
        _id?: Types.ObjectId | null | undefined;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    items: Types.DocumentArray<{
        size: string;
        color: string;
        quantity: number;
        product?: {
            name: string;
            image: string;
            price: number;
            _id?: Types.ObjectId | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }, Types.Subdocument<import("bson").ObjectId, unknown, {
        size: string;
        color: string;
        quantity: number;
        product?: {
            name: string;
            image: string;
            price: number;
            _id?: Types.ObjectId | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }> & {
        size: string;
        color: string;
        quantity: number;
        product?: {
            name: string;
            image: string;
            price: number;
            _id?: Types.ObjectId | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }>;
    user?: {
        name: string;
        email: string;
        _id?: Types.ObjectId | null | undefined;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
    versionKey: false;
}> & Omit<{
    items: Types.DocumentArray<{
        size: string;
        color: string;
        quantity: number;
        product?: {
            name: string;
            image: string;
            price: number;
            _id?: Types.ObjectId | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }, Types.Subdocument<import("bson").ObjectId, unknown, {
        size: string;
        color: string;
        quantity: number;
        product?: {
            name: string;
            image: string;
            price: number;
            _id?: Types.ObjectId | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }> & {
        size: string;
        color: string;
        quantity: number;
        product?: {
            name: string;
            image: string;
            price: number;
            _id?: Types.ObjectId | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }>;
    user?: {
        name: string;
        email: string;
        _id?: Types.ObjectId | null | undefined;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: Types.ObjectId;
}, "id"> & {
    id: string;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    versionKey: false;
}, {
    items: Types.DocumentArray<{
        size: string;
        color: string;
        quantity: number;
        product?: {
            name: string;
            image: string;
            price: number;
            _id?: Types.ObjectId | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }, Types.Subdocument<import("bson").ObjectId, unknown, {
        size: string;
        color: string;
        quantity: number;
        product?: {
            name: string;
            image: string;
            price: number;
            _id?: Types.ObjectId | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }> & {
        size: string;
        color: string;
        quantity: number;
        product?: {
            name: string;
            image: string;
            price: number;
            _id?: Types.ObjectId | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }>;
    user?: {
        name: string;
        email: string;
        _id?: Types.ObjectId | null | undefined;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, {
    items: Types.DocumentArray<{
        size: string;
        color: string;
        quantity: number;
        product?: {
            name: string;
            image: string;
            price: number;
            _id?: Types.ObjectId | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }, Types.Subdocument<import("bson").ObjectId, unknown, {
        size: string;
        color: string;
        quantity: number;
        product?: {
            name: string;
            image: string;
            price: number;
            _id?: Types.ObjectId | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }> & {
        size: string;
        color: string;
        quantity: number;
        product?: {
            name: string;
            image: string;
            price: number;
            _id?: Types.ObjectId | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }>;
    user?: {
        name: string;
        email: string;
        _id?: Types.ObjectId | null | undefined;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
    versionKey: false;
}>> & Omit<{
    items: Types.DocumentArray<{
        size: string;
        color: string;
        quantity: number;
        product?: {
            name: string;
            image: string;
            price: number;
            _id?: Types.ObjectId | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }, Types.Subdocument<import("bson").ObjectId, unknown, {
        size: string;
        color: string;
        quantity: number;
        product?: {
            name: string;
            image: string;
            price: number;
            _id?: Types.ObjectId | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }> & {
        size: string;
        color: string;
        quantity: number;
        product?: {
            name: string;
            image: string;
            price: number;
            _id?: Types.ObjectId | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    }>;
    user?: {
        name: string;
        email: string;
        _id?: Types.ObjectId | null | undefined;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: Types.ObjectId;
}, "id"> & {
    id: string;
}, {
    [path: string]: import("mongoose").SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: import("mongoose").SchemaDefinitionProperty<any, any, import("mongoose").Document<unknown, {}, {
        items: Types.DocumentArray<{
            size: string;
            color: string;
            quantity: number;
            product?: {
                name: string;
                image: string;
                price: number;
                _id?: Types.ObjectId | null | undefined;
                oldPrice?: number | null | undefined;
                discount?: number | null | undefined;
            } | null | undefined;
        }, Types.Subdocument<import("bson").ObjectId, unknown, {
            size: string;
            color: string;
            quantity: number;
            product?: {
                name: string;
                image: string;
                price: number;
                _id?: Types.ObjectId | null | undefined;
                oldPrice?: number | null | undefined;
                discount?: number | null | undefined;
            } | null | undefined;
        }> & {
            size: string;
            color: string;
            quantity: number;
            product?: {
                name: string;
                image: string;
                price: number;
                _id?: Types.ObjectId | null | undefined;
                oldPrice?: number | null | undefined;
                discount?: number | null | undefined;
            } | null | undefined;
        }>;
        user?: {
            name: string;
            email: string;
            _id?: Types.ObjectId | null | undefined;
        } | null | undefined;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<{
        timestamps: true;
        versionKey: false;
    }>> & Omit<{
        items: Types.DocumentArray<{
            size: string;
            color: string;
            quantity: number;
            product?: {
                name: string;
                image: string;
                price: number;
                _id?: Types.ObjectId | null | undefined;
                oldPrice?: number | null | undefined;
                discount?: number | null | undefined;
            } | null | undefined;
        }, Types.Subdocument<import("bson").ObjectId, unknown, {
            size: string;
            color: string;
            quantity: number;
            product?: {
                name: string;
                image: string;
                price: number;
                _id?: Types.ObjectId | null | undefined;
                oldPrice?: number | null | undefined;
                discount?: number | null | undefined;
            } | null | undefined;
        }> & {
            size: string;
            color: string;
            quantity: number;
            product?: {
                name: string;
                image: string;
                price: number;
                _id?: Types.ObjectId | null | undefined;
                oldPrice?: number | null | undefined;
                discount?: number | null | undefined;
            } | null | undefined;
        }>;
        user?: {
            name: string;
            email: string;
            _id?: Types.ObjectId | null | undefined;
        } | null | undefined;
    } & import("mongoose").DefaultTimestampProps & {
        _id: Types.ObjectId;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    items: Types.DocumentArray<{
        size: string;
        color: string;
        quantity: number;
        product?: {
            name: string;
            image: string;
            price: number;
            _id?: Types.ObjectId | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    } | {
        size: string;
        color: string;
        quantity: number;
        product?: {
            name: string;
            image: string;
            price: number;
            _id?: string | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
        _id: string;
    }, Types.Subdocument<string | import("bson").ObjectId, unknown, {
        size: string;
        color: string;
        quantity: number;
        product?: {
            name: string;
            image: string;
            price: number;
            _id?: Types.ObjectId | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    } | {
        size: string;
        color: string;
        quantity: number;
        product?: {
            name: string;
            image: string;
            price: number;
            _id?: string | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
        _id: string;
    }> & ({
        size: string;
        color: string;
        quantity: number;
        product?: {
            name: string;
            image: string;
            price: number;
            _id?: Types.ObjectId | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    } | {
        size: string;
        color: string;
        quantity: number;
        product?: {
            name: string;
            image: string;
            price: number;
            _id?: string | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
        _id: string;
    })>;
    user?: {
        name: string;
        email: string;
        _id?: Types.ObjectId | null | undefined;
    } | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    items: Types.DocumentArray<{
        size: string;
        color: string;
        quantity: number;
        product?: {
            name: string;
            image: string;
            price: number;
            _id?: Types.ObjectId | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    } | {
        size: string;
        color: string;
        quantity: number;
        product?: {
            name: string;
            image: string;
            price: number;
            _id?: string | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
        _id: string;
    }, Types.Subdocument<string | import("bson").ObjectId, unknown, {
        size: string;
        color: string;
        quantity: number;
        product?: {
            name: string;
            image: string;
            price: number;
            _id?: Types.ObjectId | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    } | {
        size: string;
        color: string;
        quantity: number;
        product?: {
            name: string;
            image: string;
            price: number;
            _id?: string | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
        _id: string;
    }> & ({
        size: string;
        color: string;
        quantity: number;
        product?: {
            name: string;
            image: string;
            price: number;
            _id?: Types.ObjectId | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
    } | {
        size: string;
        color: string;
        quantity: number;
        product?: {
            name: string;
            image: string;
            price: number;
            _id?: string | null | undefined;
            oldPrice?: number | null | undefined;
            discount?: number | null | undefined;
        } | null | undefined;
        _id: string;
    })>;
    user?: {
        name: string;
        email: string;
        _id?: Types.ObjectId | null | undefined;
    } | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=cart.model.d.ts.map
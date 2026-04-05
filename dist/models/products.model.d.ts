import { Schema } from "mongoose";
export declare const PRODUCTS_MODEL: import("mongoose").Model<{
    name: string;
    image: string;
    price: number;
    oldPrice: number;
    discount: number;
    description: string;
    inStock: number;
    reviews: import("mongoose").Types.DocumentArray<{
        comment: string;
        createdAt: NativeDate;
        user: import("mongoose").Types.ObjectId;
        rating: number;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        comment: string;
        createdAt: NativeDate;
        user: import("mongoose").Types.ObjectId;
        rating: number;
    }> & {
        comment: string;
        createdAt: NativeDate;
        user: import("mongoose").Types.ObjectId;
        rating: number;
    }>;
    categories: import("mongoose").Types.DocumentArray<{
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<string | null, unknown, {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }> & {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }>;
    sizes: import("mongoose").Types.DocumentArray<{
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<string | null, unknown, {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }> & {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }>;
    colors: import("mongoose").Types.DocumentArray<{
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<string | null, unknown, {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }> & {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }>;
    status: "0" | "1";
    isDeleted: boolean;
    deletedAt: NativeDate;
    slug?: string | null | undefined;
    createdBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
    deletedBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
    updatedBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    name: string;
    image: string;
    price: number;
    oldPrice: number;
    discount: number;
    description: string;
    inStock: number;
    reviews: import("mongoose").Types.DocumentArray<{
        comment: string;
        createdAt: NativeDate;
        user: import("mongoose").Types.ObjectId;
        rating: number;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        comment: string;
        createdAt: NativeDate;
        user: import("mongoose").Types.ObjectId;
        rating: number;
    }> & {
        comment: string;
        createdAt: NativeDate;
        user: import("mongoose").Types.ObjectId;
        rating: number;
    }>;
    categories: import("mongoose").Types.DocumentArray<{
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<string | null, unknown, {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }> & {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }>;
    sizes: import("mongoose").Types.DocumentArray<{
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<string | null, unknown, {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }> & {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }>;
    colors: import("mongoose").Types.DocumentArray<{
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<string | null, unknown, {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }> & {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }>;
    status: "0" | "1";
    isDeleted: boolean;
    deletedAt: NativeDate;
    slug?: string | null | undefined;
    createdBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
    deletedBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
    updatedBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
    versionKey: false;
}> & Omit<{
    name: string;
    image: string;
    price: number;
    oldPrice: number;
    discount: number;
    description: string;
    inStock: number;
    reviews: import("mongoose").Types.DocumentArray<{
        comment: string;
        createdAt: NativeDate;
        user: import("mongoose").Types.ObjectId;
        rating: number;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        comment: string;
        createdAt: NativeDate;
        user: import("mongoose").Types.ObjectId;
        rating: number;
    }> & {
        comment: string;
        createdAt: NativeDate;
        user: import("mongoose").Types.ObjectId;
        rating: number;
    }>;
    categories: import("mongoose").Types.DocumentArray<{
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<string | null, unknown, {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }> & {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }>;
    sizes: import("mongoose").Types.DocumentArray<{
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<string | null, unknown, {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }> & {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }>;
    colors: import("mongoose").Types.DocumentArray<{
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<string | null, unknown, {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }> & {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }>;
    status: "0" | "1";
    isDeleted: boolean;
    deletedAt: NativeDate;
    slug?: string | null | undefined;
    createdBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
    deletedBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
    updatedBy?: {
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
    name: string;
    image: string;
    price: number;
    oldPrice: number;
    discount: number;
    description: string;
    inStock: number;
    reviews: import("mongoose").Types.DocumentArray<{
        comment: string;
        createdAt: NativeDate;
        user: import("mongoose").Types.ObjectId;
        rating: number;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        comment: string;
        createdAt: NativeDate;
        user: import("mongoose").Types.ObjectId;
        rating: number;
    }> & {
        comment: string;
        createdAt: NativeDate;
        user: import("mongoose").Types.ObjectId;
        rating: number;
    }>;
    categories: import("mongoose").Types.DocumentArray<{
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<string | null, unknown, {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }> & {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }>;
    sizes: import("mongoose").Types.DocumentArray<{
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<string | null, unknown, {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }> & {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }>;
    colors: import("mongoose").Types.DocumentArray<{
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<string | null, unknown, {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }> & {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }>;
    status: "0" | "1";
    isDeleted: boolean;
    deletedAt: NativeDate;
    slug?: string | null | undefined;
    createdBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
    deletedBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
    updatedBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, {
    name: string;
    image: string;
    price: number;
    oldPrice: number;
    discount: number;
    description: string;
    inStock: number;
    reviews: import("mongoose").Types.DocumentArray<{
        comment: string;
        createdAt: NativeDate;
        user: import("mongoose").Types.ObjectId;
        rating: number;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        comment: string;
        createdAt: NativeDate;
        user: import("mongoose").Types.ObjectId;
        rating: number;
    }> & {
        comment: string;
        createdAt: NativeDate;
        user: import("mongoose").Types.ObjectId;
        rating: number;
    }>;
    categories: import("mongoose").Types.DocumentArray<{
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<string | null, unknown, {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }> & {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }>;
    sizes: import("mongoose").Types.DocumentArray<{
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<string | null, unknown, {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }> & {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }>;
    colors: import("mongoose").Types.DocumentArray<{
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<string | null, unknown, {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }> & {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }>;
    status: "0" | "1";
    isDeleted: boolean;
    deletedAt: NativeDate;
    slug?: string | null | undefined;
    createdBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
    deletedBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
    updatedBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
    versionKey: false;
}>> & Omit<{
    name: string;
    image: string;
    price: number;
    oldPrice: number;
    discount: number;
    description: string;
    inStock: number;
    reviews: import("mongoose").Types.DocumentArray<{
        comment: string;
        createdAt: NativeDate;
        user: import("mongoose").Types.ObjectId;
        rating: number;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        comment: string;
        createdAt: NativeDate;
        user: import("mongoose").Types.ObjectId;
        rating: number;
    }> & {
        comment: string;
        createdAt: NativeDate;
        user: import("mongoose").Types.ObjectId;
        rating: number;
    }>;
    categories: import("mongoose").Types.DocumentArray<{
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<string | null, unknown, {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }> & {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }>;
    sizes: import("mongoose").Types.DocumentArray<{
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<string | null, unknown, {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }> & {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }>;
    colors: import("mongoose").Types.DocumentArray<{
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<string | null, unknown, {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }> & {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }>;
    status: "0" | "1";
    isDeleted: boolean;
    deletedAt: NativeDate;
    slug?: string | null | undefined;
    createdBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
    deletedBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
    updatedBy?: {
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
        name: string;
        image: string;
        price: number;
        oldPrice: number;
        discount: number;
        description: string;
        inStock: number;
        reviews: import("mongoose").Types.DocumentArray<{
            comment: string;
            createdAt: NativeDate;
            user: import("mongoose").Types.ObjectId;
            rating: number;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
            comment: string;
            createdAt: NativeDate;
            user: import("mongoose").Types.ObjectId;
            rating: number;
        }> & {
            comment: string;
            createdAt: NativeDate;
            user: import("mongoose").Types.ObjectId;
            rating: number;
        }>;
        categories: import("mongoose").Types.DocumentArray<{
            _id?: string | null | undefined;
            name?: string | null | undefined;
        }, import("mongoose").Types.Subdocument<string | null, unknown, {
            _id?: string | null | undefined;
            name?: string | null | undefined;
        }> & {
            _id?: string | null | undefined;
            name?: string | null | undefined;
        }>;
        sizes: import("mongoose").Types.DocumentArray<{
            _id?: string | null | undefined;
            name?: string | null | undefined;
        }, import("mongoose").Types.Subdocument<string | null, unknown, {
            _id?: string | null | undefined;
            name?: string | null | undefined;
        }> & {
            _id?: string | null | undefined;
            name?: string | null | undefined;
        }>;
        colors: import("mongoose").Types.DocumentArray<{
            _id?: string | null | undefined;
            name?: string | null | undefined;
        }, import("mongoose").Types.Subdocument<string | null, unknown, {
            _id?: string | null | undefined;
            name?: string | null | undefined;
        }> & {
            _id?: string | null | undefined;
            name?: string | null | undefined;
        }>;
        status: "0" | "1";
        isDeleted: boolean;
        deletedAt: NativeDate;
        slug?: string | null | undefined;
        createdBy?: {
            name?: string | null | undefined;
            email?: string | null | undefined;
        } | null | undefined;
        deletedBy?: {
            name?: string | null | undefined;
            email?: string | null | undefined;
        } | null | undefined;
        updatedBy?: {
            name?: string | null | undefined;
            email?: string | null | undefined;
        } | null | undefined;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<{
        timestamps: true;
        versionKey: false;
    }>> & Omit<{
        name: string;
        image: string;
        price: number;
        oldPrice: number;
        discount: number;
        description: string;
        inStock: number;
        reviews: import("mongoose").Types.DocumentArray<{
            comment: string;
            createdAt: NativeDate;
            user: import("mongoose").Types.ObjectId;
            rating: number;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
            comment: string;
            createdAt: NativeDate;
            user: import("mongoose").Types.ObjectId;
            rating: number;
        }> & {
            comment: string;
            createdAt: NativeDate;
            user: import("mongoose").Types.ObjectId;
            rating: number;
        }>;
        categories: import("mongoose").Types.DocumentArray<{
            _id?: string | null | undefined;
            name?: string | null | undefined;
        }, import("mongoose").Types.Subdocument<string | null, unknown, {
            _id?: string | null | undefined;
            name?: string | null | undefined;
        }> & {
            _id?: string | null | undefined;
            name?: string | null | undefined;
        }>;
        sizes: import("mongoose").Types.DocumentArray<{
            _id?: string | null | undefined;
            name?: string | null | undefined;
        }, import("mongoose").Types.Subdocument<string | null, unknown, {
            _id?: string | null | undefined;
            name?: string | null | undefined;
        }> & {
            _id?: string | null | undefined;
            name?: string | null | undefined;
        }>;
        colors: import("mongoose").Types.DocumentArray<{
            _id?: string | null | undefined;
            name?: string | null | undefined;
        }, import("mongoose").Types.Subdocument<string | null, unknown, {
            _id?: string | null | undefined;
            name?: string | null | undefined;
        }> & {
            _id?: string | null | undefined;
            name?: string | null | undefined;
        }>;
        status: "0" | "1";
        isDeleted: boolean;
        deletedAt: NativeDate;
        slug?: string | null | undefined;
        createdBy?: {
            name?: string | null | undefined;
            email?: string | null | undefined;
        } | null | undefined;
        deletedBy?: {
            name?: string | null | undefined;
            email?: string | null | undefined;
        } | null | undefined;
        updatedBy?: {
            name?: string | null | undefined;
            email?: string | null | undefined;
        } | null | undefined;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    name: string;
    image: string;
    price: number;
    oldPrice: number;
    discount: number;
    description: string;
    inStock: number;
    reviews: import("mongoose").Types.DocumentArray<{
        comment: string;
        createdAt: NativeDate;
        user: import("mongoose").Types.ObjectId;
        rating: number;
    } | {
        comment: string;
        createdAt: NativeDate;
        user: string;
        rating: number;
        _id: string;
    }, import("mongoose").Types.Subdocument<string | import("bson").ObjectId, unknown, {
        comment: string;
        createdAt: NativeDate;
        user: import("mongoose").Types.ObjectId;
        rating: number;
    } | {
        comment: string;
        createdAt: NativeDate;
        user: string;
        rating: number;
        _id: string;
    }> & ({
        comment: string;
        createdAt: NativeDate;
        user: import("mongoose").Types.ObjectId;
        rating: number;
    } | {
        comment: string;
        createdAt: NativeDate;
        user: string;
        rating: number;
        _id: string;
    })>;
    categories: import("mongoose").Types.DocumentArray<{
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<string | null, unknown, {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }> & {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }>;
    sizes: import("mongoose").Types.DocumentArray<{
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<string | null, unknown, {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }> & {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }>;
    colors: import("mongoose").Types.DocumentArray<{
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<string | null, unknown, {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }> & {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }>;
    status: "0" | "1";
    isDeleted: boolean;
    deletedAt: NativeDate;
    slug?: string | null | undefined;
    createdBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
    deletedBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
    updatedBy?: {
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
    name: string;
    image: string;
    price: number;
    oldPrice: number;
    discount: number;
    description: string;
    inStock: number;
    reviews: import("mongoose").Types.DocumentArray<{
        comment: string;
        createdAt: NativeDate;
        user: import("mongoose").Types.ObjectId;
        rating: number;
    } | {
        comment: string;
        createdAt: NativeDate;
        user: string;
        rating: number;
        _id: string;
    }, import("mongoose").Types.Subdocument<string | import("bson").ObjectId, unknown, {
        comment: string;
        createdAt: NativeDate;
        user: import("mongoose").Types.ObjectId;
        rating: number;
    } | {
        comment: string;
        createdAt: NativeDate;
        user: string;
        rating: number;
        _id: string;
    }> & ({
        comment: string;
        createdAt: NativeDate;
        user: import("mongoose").Types.ObjectId;
        rating: number;
    } | {
        comment: string;
        createdAt: NativeDate;
        user: string;
        rating: number;
        _id: string;
    })>;
    categories: import("mongoose").Types.DocumentArray<{
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<string | null, unknown, {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }> & {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }>;
    sizes: import("mongoose").Types.DocumentArray<{
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<string | null, unknown, {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }> & {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }>;
    colors: import("mongoose").Types.DocumentArray<{
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<string | null, unknown, {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }> & {
        _id?: string | null | undefined;
        name?: string | null | undefined;
    }>;
    status: "0" | "1";
    isDeleted: boolean;
    deletedAt: NativeDate;
    slug?: string | null | undefined;
    createdBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
    deletedBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
    updatedBy?: {
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
//# sourceMappingURL=products.model.d.ts.map
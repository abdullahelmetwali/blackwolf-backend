import { Schema } from "mongoose";
export declare const COLORS_MODEL: import("mongoose").Model<{
    name: string;
    value: string;
    isDeleted: boolean;
    deletedAt: NativeDate;
    slug?: string | null | undefined;
    createdBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
    status?: "0" | "1" | null | undefined;
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
    value: string;
    isDeleted: boolean;
    deletedAt: NativeDate;
    slug?: string | null | undefined;
    createdBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
    status?: "0" | "1" | null | undefined;
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
    value: string;
    isDeleted: boolean;
    deletedAt: NativeDate;
    slug?: string | null | undefined;
    createdBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
    status?: "0" | "1" | null | undefined;
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
    value: string;
    isDeleted: boolean;
    deletedAt: NativeDate;
    slug?: string | null | undefined;
    createdBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
    status?: "0" | "1" | null | undefined;
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
    value: string;
    isDeleted: boolean;
    deletedAt: NativeDate;
    slug?: string | null | undefined;
    createdBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
    status?: "0" | "1" | null | undefined;
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
    value: string;
    isDeleted: boolean;
    deletedAt: NativeDate;
    slug?: string | null | undefined;
    createdBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
    status?: "0" | "1" | null | undefined;
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
        value: string;
        isDeleted: boolean;
        deletedAt: NativeDate;
        slug?: string | null | undefined;
        createdBy?: {
            name?: string | null | undefined;
            email?: string | null | undefined;
        } | null | undefined;
        status?: "0" | "1" | null | undefined;
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
        value: string;
        isDeleted: boolean;
        deletedAt: NativeDate;
        slug?: string | null | undefined;
        createdBy?: {
            name?: string | null | undefined;
            email?: string | null | undefined;
        } | null | undefined;
        status?: "0" | "1" | null | undefined;
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
    value: string;
    isDeleted: boolean;
    deletedAt: NativeDate;
    slug?: string | null | undefined;
    createdBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
    status?: "0" | "1" | null | undefined;
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
    value: string;
    isDeleted: boolean;
    deletedAt: NativeDate;
    slug?: string | null | undefined;
    createdBy?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
    } | null | undefined;
    status?: "0" | "1" | null | undefined;
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
//# sourceMappingURL=colors.model.d.ts.map
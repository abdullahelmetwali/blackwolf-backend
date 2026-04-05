import { Schema } from "mongoose";
export declare const INVENTORY_MODEL: import("mongoose").Model<{} & import("mongoose").DefaultTimestampProps, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, {} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>> & Omit<{} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: import("mongoose").SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: import("mongoose").SchemaDefinitionProperty<any, any, import("mongoose").Document<unknown, {}, {} & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<{
        timestamps: true;
    }>> & Omit<{} & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=inventory.model.d.ts.map
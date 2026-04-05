import { Request } from "express";
import { Document } from "mongoose";
import { UserTypo } from "../types";
export type UserDocument = Document & UserTypo;
export declare const GET_USER: (req: Request) => Promise<UserDocument | Error>;
//# sourceMappingURL=get-user.d.ts.map
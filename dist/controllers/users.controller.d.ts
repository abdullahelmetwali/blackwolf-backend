import { Request, Response, NextFunction } from "express";
export declare const updateUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const softDeleteUser: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const hardDeleteUser: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const restoreUser: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=users.controller.d.ts.map
import { Router, Response, Request } from "express";
import { USERS_MODEL } from "../models/users.model";

import { AUTH_MIDDLEWARE } from "../middlewares/auth.middleware";
import { GET_USER } from "../utils/get-user";
import { register } from "../controllers/auth.controller";
import { hardDeleteUser, restoreUser, softDeleteUser } from "../controllers/users.controller";

const USERS_ROUTE = Router();

// GET all users => /users
// GET user bg id => /users/:id

USERS_ROUTE.get("/", async (_, res) => {
    try {
        // .lean() -> plain JS objects
        // const users = await USERS_MODEL.deleteMany({}).lean()
        const users = await USERS_MODEL.find({}, { password: 0 }).lean();

        return res.status(200).json({ data: users });
    } catch (error: Error | any) {
        res.status(500).json({
            error: error.message,
        });
    }
});

// admin
USERS_ROUTE.get("/dashboard", async (req: Request, res: Response) => {
    try {
        const user = await GET_USER(req);

        if (user instanceof Error) throw new Error(user?.message);
        if (user?.role !== "admin") throw new Error("You are not authorized to access this route");

        return res.status(200).json({ data: user });
    } catch (error: Error | any) {
        res.status(500).json({
            error: error.message,
        });
    }
});

// user
USERS_ROUTE.get("/profile", async (req: Request, res: Response) => {
    try {
        const user = await GET_USER(req);
        if (user instanceof Error) throw new Error(user?.message);
        return res.status(200).json({ data: user });
    } catch (error: Error | any) {
        res.status(500).json({
            error: error.message,
        });
    }
});

USERS_ROUTE.get("/:id", (req, res) => res.send({ message: `Get user details for` }));

USERS_ROUTE.post("/", AUTH_MIDDLEWARE, register);

USERS_ROUTE.delete("/soft/:id", AUTH_MIDDLEWARE, softDeleteUser);

USERS_ROUTE.delete("/hard/:id", AUTH_MIDDLEWARE, hardDeleteUser);

USERS_ROUTE.delete("/restore/:id", AUTH_MIDDLEWARE, restoreUser);

export default USERS_ROUTE;
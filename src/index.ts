import { PORT } from "./config/env";

import express from "express";
import cookiesParser from 'cookie-parser';
import cors from "cors";

import { CONNECT_TO_DATA_BASE } from "@/db/mongodb";
import { ERROR_MIDDLEWARE } from "@/middlewares/error.middleware";

import USERS_ROUTE from "@/routes/users.route";
import AUTH_ROUTE from "@/routes/auth.route";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookiesParser());

(async () => {
    try {
        await CONNECT_TO_DATA_BASE();

        app.use(cors({
            origin: ['http://localhost:3000', "domain"], // frontend locally
            methods: ['GET', 'POST', 'PUT', 'DELETE'], // HTTP methods
            allowedHeaders: ['Content-Type', 'Authorization'], // headers that you need to pass
        }));

        app.get("/", (req, res) => res.json({
            message: "Hi this is the root"
        }));

        app.use("/api/v1/users", USERS_ROUTE);
        app.use("/api/v1/auth", AUTH_ROUTE);

        app.use(ERROR_MIDDLEWARE);

        // app.listen(PORT, () => {
        //     console.log(`server is running on ${PORT}`);
        // });
    } catch (error) {
        console.error("Failed to connect to DB. Server not started.", error);
        process.exit(1);
    }
})();

export default app;
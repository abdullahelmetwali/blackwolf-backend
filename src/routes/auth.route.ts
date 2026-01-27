// auth.route is for making the routes frontend fetch on it
import { Router } from "express";
import { logIn, register, logOut } from "../controllers/auth.controller";

const AUTH_ROUTE = Router();

AUTH_ROUTE.post("/login", logIn);
AUTH_ROUTE.post("/register", register);
AUTH_ROUTE.post("/logout", logOut);

export default AUTH_ROUTE;
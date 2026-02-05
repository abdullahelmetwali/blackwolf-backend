// auth.route is for making the routes frontend fetch on it
import { Router } from "express";
import { logIn, register } from "../controllers/auth.controller";

const AUTH_ROUTE = Router();

AUTH_ROUTE.post("/login", logIn);
AUTH_ROUTE.post("/register", register);

export default AUTH_ROUTE;
import { Router } from "express";

import { addToCart } from "../controllers/cart.controller";

const CART_ROUTER = Router();

CART_ROUTER.post("/", addToCart);


export default CART_ROUTER;
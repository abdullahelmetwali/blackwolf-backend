import { Router } from "express";

import { CART_MODEL } from "../models/cart.model";
import { addToCart, getCart, removeFromCart } from "../controllers/cart.controller";

const CART_ROUTER = Router();

CART_ROUTER.post("/", addToCart);
CART_ROUTER.get("/", getCart);
CART_ROUTER.delete("/:id", removeFromCart);


export default CART_ROUTER;
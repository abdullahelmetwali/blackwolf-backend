import { Router } from "express";

import { CART_MODEL } from "../models/cart.model";
import { addToCart } from "../controllers/cart.controller";

const CART_ROUTER = Router();

CART_ROUTER.post("/", addToCart);
CART_ROUTER.get("/", async (req, res) => {
    // const cart = await CART_MODEL.deleteMany({}).lean();
    const cart = await CART_MODEL.find({}).lean();
    res.json({ data: cart });
});


export default CART_ROUTER;
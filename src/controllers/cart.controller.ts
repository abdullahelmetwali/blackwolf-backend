import { NextFunction, Request, Response } from "express";

import { CustomValidationError } from "../classes";
import { GET_USER } from "../utils/get-user";

import { CART_MODEL } from "../models/cart.model";

export const addToCart = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header("Authorization");
        if (!token) {
            return res.status(401).json({ message: "Please , login first" });
        };

        const { product, size, color, quantity } = req.body;

        const user = await GET_USER(req);
        if (user instanceof Error) throw new Error(user?.message);

        const cart = await CART_MODEL.create({
            product,
            size,
            color,
            quantity
        });

        return res.status(200).json({ data: cart });
    } catch (error: Error | any) {
        next(error);
    }
}
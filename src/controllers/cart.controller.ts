import { startSession } from "mongoose";
import { NextFunction, Request, Response } from "express";

import { GET_USER } from "../utils/get-user";

import { CART_MODEL } from "../models/cart.model";
import { PRODUCTS_MODEL } from "../models/products.model";
import { SIZES_MODEL } from "../models/sizes.model";
import { COLORS_MODEL } from "../models/colors.model";

export const addToCart = async (req: Request, res: Response, next: NextFunction) => {
    const session = await startSession();
    try {
        session.startTransaction();
        const token = req.header("Authorization");
        if (!token) {
            return res.status(401).json({ message: "Please , login first" });
        };

        const user = await GET_USER(req);
        if (user instanceof Error) throw new Error(user?.message);

        const { product, size, color, quantity } = req.body;

        const [thisItemAddedBefore, thisProduct, thisSize, thisColor] = await Promise.allSettled([
            CART_MODEL.findOne({ "product._id": product }).session(session),
            PRODUCTS_MODEL.findById(product).select("_id name price oldPrice discount image inStock isDeleted").session(session),
            SIZES_MODEL.findById(size).select("name isDeleted").session(session),
            COLORS_MODEL.findById(color).select("name isDeleted").session(session),
        ]);

        if (thisItemAddedBefore.status === "fulfilled" && thisItemAddedBefore.value) {
            throw new Error("Item already added to cart");
        };

        if (thisProduct.status === "fulfilled" && thisProduct.value) {
            if (thisProduct.value.isDeleted || Number(thisProduct.value.inStock) === 0) throw new Error("Product not found");
        } else {
            throw new Error("Product not found");
        }

        if (thisSize.status !== "fulfilled" || !thisSize.value || thisSize.value.isDeleted) throw new Error("Size not found");
        if (thisColor.status !== "fulfilled" || !thisColor.value || thisColor.value.isDeleted) throw new Error("Color not found");

        const productData = {
            _id: thisProduct.value._id,
            name: thisProduct.value.name,
            image: thisProduct.value.image,
            price: thisProduct.value.price,
            oldPrice: thisProduct.value.oldPrice,
            discount: thisProduct.value.discount,
        } as const;

        const newCartItem = await CART_MODEL.create([{
            product: productData,
            size: thisSize.value.name,
            color: thisColor.value.name,
            quantity
        }], { session });

        if (!newCartItem[0]) throw new Error("Failed to add to cart");

        user.cart = user.cart || [];
        user.cart.push(newCartItem[0].toObject() as any);

        await user.save({ session });
        await session.commitTransaction();

        return res.status(200).json({ data: newCartItem[0].toObject() });
    } catch (error: Error | any) {
        if (session.inTransaction()) {
            await session.abortTransaction();
        }
        next(error);
    } finally {
        session.endSession();
    }
};

export const removeFromCart = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header("Authorization");
        if (!token) {
            return res.status(401).json({ message: "Please, login first" });
        };

        const user = await GET_USER(req);
        if (user instanceof Error) throw new Error(user?.message);

        const { id } = req.params;

        const itemToDelete = await CART_MODEL.findById(id);
        if (!itemToDelete) throw new Error("Item not found");

        await CART_MODEL.deleteOne({ _id: id });
        const newCart = await CART_MODEL.find({ _id: { $ne: id } });

        user.set({ cart: newCart });
        await user.save();

        return res.status(200).json({ data: newCart });
    } catch (error: Error | any) {
        next(error);
    }
};
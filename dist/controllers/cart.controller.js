"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFromCart = exports.addToCart = exports.getCart = void 0;
const mongoose_1 = require("mongoose");
const get_user_1 = require("../utils/get-user");
const cart_model_1 = require("../models/cart.model");
const products_model_1 = require("../models/products.model");
const sizes_model_1 = require("../models/sizes.model");
const colors_model_1 = require("../models/colors.model");
const getCart = async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if (!token) {
            return res.status(401).json({ message: "Please , login first" });
        }
        ;
        const user = await (0, get_user_1.GET_USER)(req);
        if (user instanceof Error)
            throw new Error(user?.message);
        const cart = user.role === "admin" ? await cart_model_1.CART_MODEL.find({}).lean() : user.cart;
        return res.status(200).json({ data: cart });
    }
    catch (error) {
        next(error);
    }
};
exports.getCart = getCart;
const addToCart = async (req, res, next) => {
    const session = await (0, mongoose_1.startSession)();
    try {
        session.startTransaction();
        const token = req.header("Authorization");
        if (!token) {
            return res.status(401).json({ message: "Please , login first" });
        }
        ;
        const user = await (0, get_user_1.GET_USER)(req);
        if (user instanceof Error)
            throw new Error(user?.message);
        const { product, size, color, quantity } = req.body;
        const [thisProduct, thisSize, thisColor] = await Promise.allSettled([
            products_model_1.PRODUCTS_MODEL.findById(product).select("_id name slug price oldPrice discount image inStock isDeleted").session(session),
            sizes_model_1.SIZES_MODEL.findById(size).select("name isDeleted").session(session),
            colors_model_1.COLORS_MODEL.findById(color).select("name isDeleted").session(session),
        ]);
        const userCart = user.cart || [];
        const sameProductAddedBefore = userCart.some((p) => p.product._id.toString() === product);
        if (sameProductAddedBefore) {
            throw new Error("Item already added to cart");
        }
        ;
        if (thisProduct.status === "fulfilled" && thisProduct.value) {
            if (thisProduct.value.isDeleted || Number(thisProduct.value.inStock) === 0)
                throw new Error("Product not found");
        }
        else {
            throw new Error("Product not found");
        }
        ;
        if (thisSize.status !== "fulfilled" || !thisSize.value || thisSize.value.isDeleted)
            throw new Error("Size not found");
        if (thisColor.status !== "fulfilled" || !thisColor.value || thisColor.value.isDeleted)
            throw new Error("Color not found");
        const cartItem = {
            product: {
                _id: thisProduct.value._id,
                name: thisProduct.value.name,
                slug: thisProduct.value.slug,
                image: thisProduct.value.image,
                price: thisProduct.value.price,
                oldPrice: thisProduct.value.oldPrice,
                discount: thisProduct.value.discount,
            },
            size: thisSize.value.name,
            color: thisColor.value.name,
            quantity: quantity
        };
        const newCartItem = await cart_model_1.CART_MODEL.create([{
                user: {
                    _id: user._id,
                    name: user.fullName,
                    email: user.email,
                },
                items: [...user.cart, cartItem]
            }], { session });
        if (!newCartItem[0])
            throw new Error("Failed to add to cart");
        console.log(thisProduct.value);
        user.cart = [...userCart, cartItem];
        await user.save({ session });
        await session.commitTransaction();
        return res.status(200).json({
            data: cartItem
        });
    }
    catch (error) {
        if (session.inTransaction()) {
            await session.abortTransaction();
        }
        next(error);
    }
    finally {
        session.endSession();
    }
};
exports.addToCart = addToCart;
const removeFromCart = async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if (!token) {
            return res.status(401).json({ message: "Please, login first" });
        }
        ;
        const { id } = req.params;
        const user = await (0, get_user_1.GET_USER)(req);
        if (user instanceof Error)
            throw new Error(user?.message);
        const userCart = user.cart || [];
        const mapCart = new Map(userCart?.map((item) => [item._id.toString(), item]));
        if (!mapCart.get(id))
            throw new Error("Item not found");
        mapCart.delete(id);
        const newCart = [...mapCart.values()];
        user.set({ cart: newCart });
        await user.save();
        return res.status(200).json({ data: newCart });
    }
    catch (error) {
        next(error);
    }
};
exports.removeFromCart = removeFromCart;
//# sourceMappingURL=cart.controller.js.map
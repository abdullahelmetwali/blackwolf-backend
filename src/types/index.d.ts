import { Types } from "mongoose";

export interface ValidationErrors {
    [key: string]: string;
};

export interface UserTypo {
    _id: Types.ObjectId
    slug: string;
    firstName: string;
    lastName: string;
    fullName: string;
    phone: string,
    email: string;
    password: string;
    gender: "male" | "female";
    role: "admin" | "customer",
    cart: CartItem[]
};

export interface Review {
    user: string;
    rating: number;
    comment: string;
    createdAt: Date;
};

export interface Category {
    _id: Types.ObjectId;
    name: string;
    slug: string
};

export interface Size {
    _id: Types.ObjectId;
    name: string;
};

export interface Color {
    _id: Types.ObjectId;
    name: string;
    value: string
};

export interface Product {
    _id: Types.ObjectId
    slug: string;
    name: string;
    description: string;
    price: number;
    oldPrice: number;
    discount: number;
    inStock: number;
    reviews: Review[];
    image: string;
    categories: Category[];
    sizes: Size[];
    colors: Color[];
    status: '0' | '1';
    isDeleted: boolean;
    deletedAt: Date | null;
    deletedBy: string | null;
    createdBy: string | null;
    updatedBy: string | null;
};

export interface CartItem {
    _id: Types.ObjectId;
    product: {
        _id: Types.ObjectId,
        name: string,
        slug: string,
        image: string,
        price: number,
        oldPrice?: number,
        discount?: number,
    },
    color: string,
    size: string,
    quantity: number;
}
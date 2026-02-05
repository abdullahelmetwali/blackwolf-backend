export interface ValidationErrors {
    [key: string]: string;
};

export interface UserTypo {
    _id: string
    slug: string;
    name: string;
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
    _id: string;
    name: string;
    slug: string
};

export interface Size {
    _id: string;
    name: string;
};

export interface Color {
    _id: string;
    name: string;
    value: string
};

export interface Product {
    _id: string
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
    product: {
        name: string,
        image: string,
        price: number;
        oldPrice?: number;
        discount?: number;
    },
    color: Color,
    size: Size,
    quantity: number;
}
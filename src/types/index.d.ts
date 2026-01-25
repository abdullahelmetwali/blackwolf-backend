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
    role: "admin" | "customer"
};

export type IdAndName = {
    _id: string,
    name: string
};

export interface ProductTypo {
    slug: string;
    name: string;
    description: string,
    image: string,
    colors: IdAndName[];
    categories: IdAndName[];
    sizes: IdAndName[];
    price: number;
    oldPrice?: number,
    discount?: number,
    status: "0" | "1"
};
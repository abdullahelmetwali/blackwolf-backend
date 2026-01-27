import { config } from "dotenv";

if (process.env.NODE_ENV !== 'production') {
    config({ path: `.env.${process.env.NODE_ENV || 'development'}` });
}

export const {
    PORT,
    DB_URI,
    JWT_SECRET,
    JWT_EXPIRES_IN = '86400',
    API_PORT
} = process.env;

if (!DB_URI || !JWT_SECRET) {
    throw new Error('Missing required environment variables: DB_URI and JWT_SECRET');
}
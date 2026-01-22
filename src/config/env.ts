// config/env.ts
import { config } from "dotenv";

// Only load .env files in development (Vercel provides env vars directly)
if (process.env.NODE_ENV !== 'production') {
    config({ path: `.env.${process.env.NODE_ENV || 'development'}` });
}

export const {
    PORT,
    DB_URI,
    JWT_SECRET,
    JWT_EXPIRES_IN = '7d'
} = process.env;

// Validate required variables
if (!DB_URI || !JWT_SECRET) {
    throw new Error('Missing required environment variables: DB_URI and JWT_SECRET');
}
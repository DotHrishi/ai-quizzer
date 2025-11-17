import { neon } from "@neondatabase/serverless";
import { sql } from "../config/db-config.js";
import bcrypt from "bcryptjs";

export const createUser = async (username, email, password) => {
    const hashed = await bcrypt.hash(password, 10);
    const result = await sql`
        INSERT INTO users (username, email, password_hash) VALUES (${username}, ${email}, ${hashed})
        RETURNING id, username, email;
    `;
    return result[0];
};

export const getAllUsers = async () => {
    const result = await sql`
        SELECT * FROM users;
    `;
    return result;
}

export const getUserByEmail = async (email) => {
    const result = await sql`
        SELECT * FROM users WHERE email = ${email};
    `;
    return result[0];
};

export const validateUser = async (email, password) => {
    const user = await getUserByEmail(email);
    if (!user) return null;
    if(!password) return null;

    const isValid = await bcrypt.compare(password, user.password_hash);
    if (!isValid) {
        return null;
    }

    return {
    username: user.username,
    email: user.email
  };
};
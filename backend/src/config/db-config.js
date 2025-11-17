import dotenv from "dotenv";
import { neon } from "@neondatabase/serverless";

dotenv.config();

export const sql = neon(process.env.DATABASE_URL);

export default function connectDB() {
  try {
    console.log("Neon database initialized.");
    return true;
  } catch (error) {
    console.error("Database connection failed:", error);
    return false;
  }
}

import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export const sql = async (strings, ...values) => {
  const text = strings.reduce((acc, str, i) => {
    return acc + str + (values[i] ? `$${i + 1}` : "");
  }, "");

  const result = await pool.query(text, values);
  return result.rows;
};
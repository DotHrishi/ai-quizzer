import express from "express";
import connectDB from "./config/db-config.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));


connectDB();

const PORT=process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
});             
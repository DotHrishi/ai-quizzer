import express from "express";
import multer from "multer";
// import { createQuiz } from "../controllers/quizControllers.js";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

// router.post("/create", upload.single("document"), createQuiz);

export default router;
import express from "express";
import { createQuiz, getQuiz, getQuizByCode, getQuizQuestions, submitQuiz } from "../controllers/quizControllers.js";

const router = express.Router();

router.post("/create", createQuiz);
router.get("/getQuizzes", getQuiz);
router.get("/:code", getQuizByCode);
router.get("/:code/questions", getQuizQuestions);
router.post("/:code/submit", submitQuiz);

export default router;
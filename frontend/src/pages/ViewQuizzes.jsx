import React, { useState, useEffect } from "react";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import QuizCard from "../components/QuizCard";

export default function ViewQuizzes() {
  const [quizzes, setQuizzes] = useState({ quizzes: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'}/api/quiz/getQuizzes`);
        const data = await response.json();
        setQuizzes(data);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div className="bg-white dark:bg-neutral-950 min-h-screen flex flex-col transition-colors duration-300">
        <Navbar />
        <div className="grow container mx-auto px-6 py-12 max-w-7xl">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-black dark:text-white mb-2">
              All Quizzes
            </h1>
            <p className="text-gray-400 text-lg">
              Explore all quizzes or start your assigned quizzes below.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <p className="text-xl text-gray-500">Loading quizzes...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quizzes?.quizzes?.map((quiz, index) => (
                <QuizCard key={index} quiz={quiz} />
              ))}
            </div>
          )}
        </div>
        <Footer />
    </div>
  )
};


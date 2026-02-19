import React from "react";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import QuizCard from "../components/QuizCard";

const ViewQuizzes = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
        <Navbar />
        <div className="grow container mx-auto px-6 py-12 max-w-7xl">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-black mb-2">
              All Quizzes
            </h1>
            <p className="text-gray-400 text-lg">
              Explore all quizzes or start your assigned quizzes below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <QuizCard />
            <QuizCard />
            <QuizCard />
            <QuizCard />
            <QuizCard />
            <QuizCard />
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default ViewQuizzes;
import { useState } from "react";
import Navbar  from "../components/Navbar";
import Footer  from "../components/Footer";
import { use } from "react";


export default function makeQuizzes() {

    const [formData, setFormData] = useState({
        topic: "",
        difficulty: "easy",
        numQuestions: 5,
        duration: 15,
        creatorName: "",
    });

    const [loading, setLoading] = useState(false);
    const [quizCode, setQuizCode] = useState(null);
    const [error, setError] = useState(null);
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setQuizCode(null);

        try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'}/api/quiz/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
    );
        const data =await response.json();

        if(!response.ok) {
            throw new Error(data.message || "Something went wrong");
        }

        setQuizCode(data.quizCode);
    } catch(err) {
        setError(err.message);
    }

    setLoading(false);
    }

  return (
    <div className="bg-gray-50 dark:bg-neutral-950 min-h-screen flex flex-col font-sans transition-colors duration-300">
      <Navbar />
      
      <div className="grow container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-black via-[#183fa0] to-[#1900ff] dark:from-white dark:via-blue-400 dark:to-[#1900ff] text-transparent bg-clip-text">
            Generate AI Quiz
          </h1>
          <p className="text-gray-500 text-lg">Provide a topic and let our AI craft a custom assessment instantly.</p>
        </div>

        <div className="bg-white dark:bg-neutral-900 border border-blue-600 border-r-8 border-b-8 p-8 md:p-12 animate-in fade-in zoom-in-95 duration-500 relative">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Topic Field */}
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">Quiz Topic</label>
              <input
                type="text"
                name="topic"
                placeholder="e.g. JavaScript Arrays, World War 2"
                value={formData.topic}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 dark:border-neutral-700 p-4 rounded-sm bg-gray-50 dark:bg-neutral-800 focus:bg-white dark:focus:bg-neutral-700 focus:border-blue-600 focus:ring-4 focus:ring-blue-500/30 transition-all outline-none text-lg text-gray-800 dark:text-white placeholder-gray-400 font-medium"
                required
              />
            </div>

            {/* Grid for smaller inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">Difficulty</label>
                <select
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 dark:border-neutral-700 p-4 rounded-sm bg-gray-50 dark:bg-neutral-800 focus:bg-white dark:focus:bg-neutral-700 focus:border-blue-600 focus:ring-4 focus:ring-blue-500/30 transition-all outline-none text-lg text-gray-800 dark:text-white font-medium capitalize"
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">Questions Count</label>
                <input
                  type="number"
                  name="numQuestions"
                  min="1"
                  max="50"
                  placeholder="Max 50"
                  value={formData.numQuestions}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 dark:border-neutral-700 p-4 rounded-sm bg-gray-50 dark:bg-neutral-800 focus:bg-white dark:focus:bg-neutral-700 focus:border-blue-600 focus:ring-4 focus:ring-blue-500/30 transition-all outline-none text-lg text-gray-800 dark:text-white font-medium"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">Duration (Mins)</label>
                <input
                  type="number"
                  name="duration"
                  min="1"
                  max="180"
                  placeholder="e.g. 15"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 dark:border-neutral-700 p-4 rounded-sm bg-gray-50 dark:bg-neutral-800 focus:bg-white dark:focus:bg-neutral-700 focus:border-blue-600 focus:ring-4 focus:ring-blue-500/30 transition-all outline-none text-lg text-gray-800 dark:text-white font-medium"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">Creator Name</label>
                <input
                  type="text"
                  name="creatorName"
                  placeholder="Your Name"
                  value={formData.creatorName}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 dark:border-neutral-700 p-4 rounded-sm bg-gray-50 dark:bg-neutral-800 focus:bg-white dark:focus:bg-neutral-700 focus:border-blue-600 focus:ring-4 focus:ring-blue-500/30 transition-all outline-none text-lg text-gray-800 dark:text-white font-medium"
                  required
                />
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto px-12 py-4 text-black text-xl font-bold tracking-wide rounded-sm bg-green-500 transform transition-transform duration-300 ease-in-out hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 flex justify-center items-center gap-3"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-green-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </>
                ) : "Create"}
              </button>
            </div>
          </form>

          {/* Success Banner */}
          {quizCode && (
            <div className="mt-8 p-6 bg-green-50 border-l-4 border-green-500 text-green-900 rounded-r-sm animate-in slide-in-from-top-4 duration-300">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🎉</span>
                <h3 className="text-xl font-bold">Quiz Successfully Generated!</h3>
              </div>
              <p className="text-green-800 mb-4">Share this code with your participants to let them take the quiz.</p>
              <div className="inline-block bg-white px-6 py-2 border-2 border-green-200 font-mono text-3xl font-black text-green-700 tracking-widest rounded-sm shadow-sm select-all">
                {quizCode}
              </div>
            </div>
          )}

          {/* Error Banner */}
          {error && (
            <div className="mt-8 p-4 bg-red-50 border-l-4 border-red-500 text-red-900 rounded-r-sm flex items-center gap-3 animate-in slide-in-from-top-4 duration-300">
              <span className="text-xl">⚠</span>
              <span className="font-semibold">{error}</span>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

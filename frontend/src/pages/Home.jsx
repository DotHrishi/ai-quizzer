import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const navigate = useNavigate();
  const features = [
    {
      icon: "🛡️",
      title: "Secure Quizzes",
      description:
        "Bank-level security keeps your assessments safe and tamper-proof.",
    },
    {
      icon: "👀",
      title: "Simple Proctoring",
      description:
        "Easy monitoring tools that maintain test integrity effortlessly.",
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Blazing performance ensures smooth, uninterrupted testing.",
    },
    {
      icon: "🧠",
      title: "AI-Powered Questions",
      description: "Smart question generation adapts to your content needs.",
    },
    {
      icon: "❓",
      title: "Manual Questions",
      description: "Create custom questions with full creative control.",
    },
    {
      icon: "✨",
      title: "Modern & Fun",
      description: "Sleek design makes testing engaging and enjoyable.",
    },
  ];

  return (
<>
    <Navbar />

      <div className="bg-black text-white min-h-screen relative">

  {/* GLOW FOR HERO (TOP-RIGHT) */}
  <div className="absolute top-0 right-0 w-[420px] h-[320px] bg-[#0051ff] blur-[180px] rounded-full pointer-events-none z-0"></div>

  {/* Hero */}
  <div className="relative w-full md:max-w-1/2 md:ml-12 px-4 py-10 md:py-20 text-left break-words z-10">

    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#183fa0] to-[#1900ff] text-transparent bg-clip-text">
      Welcome to Quizzette!
    </h1>

    <p className="text-gray-300 text-lg leading-relaxed mb-8">
      The future of online assessments is here. Create, manage, and deliver
      secure quizzes with cutting-edge technology and unmatched reliability with AI powered quiz creation and evaluation.
    </p>

    <button
      onClick={() => navigate('/quizzes')}
      className="px-8 py-3 text-black text-lg font-semibold rounded-lg bg-[#27db48] hover:opacity-90 hover:-translate-y-1 transition-all shadow-xl"
    >
      Explore Assigned Quizzes
    </button>
  </div>



      {/* Stats */}
      <div className="max-w-4xl mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div>
          <h2 className="text-4xl font-bold text-orange-500">99.9%</h2>
          <p className="text-gray-400 text-lg">Uptime Reliability</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-cyan-400">50K+</h2>
          <p className="text-gray-400 text-lg">Quizzes Created</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-purple-500">2M+</h2>
          <p className="text-gray-400 text-lg">Students Assessed</p>
        </div>
      </div>

      {/* Features */}
      <div className="text-center max-w-5xl mx-auto py-10">
        <h2 className="text-4xl font-semibold mb-10">Why Choose Quizzette?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-neutral-900 border border-white/10 rounded-xl p-6 h-48 flex flex-col items-center justify-center hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-2xl transition-all"
            >
              <div className="text-3xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <div className="text-center max-w-3xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-semibold mb-6">Revolutionizing Online Testing</h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Quizzette transforms traditional testing with advanced AI technology
          and intuitive design. Create secure, engaging assessments that are both
          reliable and fun. Whether you're an educator or business professional,
          our platform provides everything you need for successful testing.
        </p>

        <div className="flex gap-2 justify-center flex-wrap">
          <span className="px-3 py-1 text-orange-400 bg-orange-500/20 rounded-full text-sm">Secure</span>
          <span className="px-3 py-1 text-cyan-400 bg-cyan-400/20 rounded-full text-sm">Fast</span>
          <span className="px-3 py-1 text-purple-400 bg-purple-400/20 rounded-full text-sm">Reliable</span>
          <span className="px-3 py-1 text-green-400 bg-green-400/20 rounded-full text-sm">AI-Powered</span>
          <span className="px-3 py-1 text-pink-400 bg-pink-400/20 rounded-full text-sm">Modern</span>
        </div>
      </div>
    </div>

    <Footer />
    </>
  );
}

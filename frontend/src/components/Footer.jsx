import React from "react";

export default function Footer() {
  return (
    <footer className="relative border-t border-orange-500/20 mt-auto bg-black">
      {/* Shimmer Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#0026ff]" />

      <div className="max-w-6xl mx-auto py-4 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Logo */}
          <h2
            className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-cyan-400 bg-clip-text text-transparent cursor-pointer transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,107,53,0.5)]"
          >
            Quizzette
          </h2>

          {/* Copyright */}
          <p className="text-gray-400 text-sm hover:text-cyan-400 transition-colors">
            © 2025 Quizzette. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

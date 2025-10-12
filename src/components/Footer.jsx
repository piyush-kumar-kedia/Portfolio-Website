import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-900 border-t border-gray-700">
      <div className="max-w-5xl mx-auto px-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-amber-400 font-semibold">Piyush Kumar Kedia</span> • Built with React & Tailwind
      </div>
    </footer>
  );
}

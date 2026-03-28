import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/90 bg-white/60 py-6 backdrop-blur-md sm:py-8">
      <div className="mx-auto max-w-6xl px-4 text-center text-[11px] text-zinc-500 sm:px-5 sm:text-sm lg:px-8">
        <span className="font-medium text-zinc-700">
          © {new Date().getFullYear()} Piyush Kumar Kedia
        </span>
        <span className="mx-2 text-zinc-300" aria-hidden>
          ·
        </span>
        <span>React & Tailwind</span>
      </div>
    </footer>
  );
}

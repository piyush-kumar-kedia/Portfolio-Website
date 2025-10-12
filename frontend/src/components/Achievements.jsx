import React from "react";
import AnimatedSection from "./AnimatedSection";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gray-900 text-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-amber-400">
          Achievements
        </h2>
        <ul className="list-disc pl-5 space-y-3 text-gray-300 text-lg md:text-xl">
          <li>
            Qualified{" "}
            <span className="text-amber-400 font-semibold">JEE Advanced</span> —
            AIR 5850 (Top 0.5%)
          </li>
          <li>
            <span className="text-amber-400 font-semibold">JEE Mains</span> —
            99.63%ile (100% in Physics)
          </li>
        </ul>
      </div>
    </section>
  );
}

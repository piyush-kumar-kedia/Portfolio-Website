import React from "react";
import AnimatedSection from "./AnimatedSection";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-900 text-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-amber-400 text-center">
          Education
        </h2>
        <div className="space-y-6">
          {/* B.Tech */}
          <div className="border border-gray-700 rounded-md p-5 bg-gray-800 hover:bg-gray-700 transition-colors">
            <div className="font-semibold text-amber-400">
              B.Tech — Chemical Science and Technology
            </div>
            <div className="text-gray-300 text-sm md:text-base">
              Indian Institute of Technology, Guwahati • 2024 - Present • CGPA:
              7.67 (current)
            </div>
          </div>

          {/* Senior Secondary */}
          <div className="border border-gray-700 rounded-md p-5 bg-gray-800 hover:bg-gray-700 transition-colors">
            <div className="font-semibold text-amber-400">
              Senior Secondary (CBSE)
            </div>
            <div className="text-gray-300 text-sm md:text-base">
              94.8% • 2024
            </div>
          </div>

          {/* Secondary / 10th */}
          <div className="border border-gray-700 rounded-md p-5 bg-gray-800 hover:bg-gray-700 transition-colors">
            <div className="font-semibold text-amber-400">Secondary (CBSE)</div>
            <div className="text-gray-300 text-sm md:text-base">
              96.4% • 2022
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

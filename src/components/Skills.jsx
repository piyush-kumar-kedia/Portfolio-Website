import React from "react";
import { skills } from "../data/skills";
import AnimatedSection from "./AnimatedSection";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-amber-400 text-center">
          Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([group, list]) => (
            <div
              key={group}
              className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-md hover:shadow-xl hover:bg-gray-700 transition-all duration-300"
            >
              <h4 className="font-semibold capitalize text-amber-400 mb-4 text-lg">
                {group}
              </h4>
              <div className="flex flex-wrap gap-3">
                {list.map((s) => (
                  <span
                    key={s}
                    className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-gray-600 transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

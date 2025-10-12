import React from "react";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-gray-200 ">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-amber-400 ">
          About Me
        </h2>

        {/* About Content */}
        <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl">
          <p>
            I’m{" "}
            <span className="text-amber-400 font-semibold">
              Piyush Kumar Kedia
            </span>
            , an undergraduate student at{" "}
            <span className="text-amber-400 font-semibold">
              Indian Institute of Technology, Guwahati
            </span>{" "}
            pursuing a B.Tech in{" "}
            <span className="text-amber-400 font-semibold">
              Chemical Science and Technology
            </span>{" "}
            with a Minor in Mathematics.
          </p>

          <p>
            I’m passionate about{" "}
            <span className="text-amber-400 font-semibold">
              software development
            </span>
            , especially in building{" "}
            <span className="text-amber-400 font-semibold">
              scalable web applications
            </span>{" "}
            and understanding systems end-to-end — from writing backend APIs to
            deploying full-stack platforms on AWS.
          </p>

          <p>
            Currently, I am part of the{" "}
            <span className="text-amber-400 font-semibold">Coding Club</span>{" "}
            and{" "}
            <span className="text-amber-400 font-semibold">
              Research & Industrial Conclave WebOps team
            </span>{" "}
            at IITG, where I’ve contributed to production-grade platforms used
            by thousands of students.
          </p>

          <p>
            My current focus is mastering{" "}
            <span className="text-amber-400 font-semibold">
              Data Structures & Algorithms (DSA)
            </span>{" "}
            and enhancing my full-stack skills to secure a{" "}
            <span className="text-amber-400 font-semibold">
              FAANG internship
            </span>{" "}
            in my third year.
          </p>

          <p>
            Outside of coding, I enjoy solving logical puzzles, exploring new
            tech tools, and optimizing workflows that make life easier.
          </p>
        </div>
      </div>
    </section>
  );
}

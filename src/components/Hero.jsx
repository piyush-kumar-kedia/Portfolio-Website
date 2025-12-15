import React from "react";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";

export default function Hero() {
  return (
    <section id="home" className="py-28 bg-gray-900 text-gray-200">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I’m <br /><span className="text-amber-400">Piyush Kumar Kedia</span>
          </h1>
          <p className="text-gray-300 mb-6 text-lg">
          <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6">
  Full-stack developer skilled in <span className="font-semibold text-amber-400">React, Node.js, and modern web technologies</span>, building <span className="font-semibold text-amber-400">scalable, high-performance web applications</span> that deliver <span className="font-semibold text-amber-400">seamless user experiences</span> and <span className="font-semibold text-amber-400">production-ready solutions</span>.
</p>



          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-md bg-amber-400 text-gray-900 font-medium hover:bg-amber-500 hover:scale-105 transition-all flex items-center gap-2"
            >
              View Projects <FaArrowRight />
            </a>
            <a
              href="/PIYUSH_KUMAR_KEDIA_CV.pdf"
              download
              className="px-6 py-3 rounded-md border border-amber-400 text-amber-400 font-medium hover:bg-amber-400 hover:text-gray-900 hover:scale-105 transition-all flex items-center gap-2"
            >
              Download Resume <FaDownload />
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-56 md:w-64 aspect-square rounded-full overflow-hidden border-4 border-amber-400 shadow-xl">
            <img
              src="profile_pic.jpg"
              alt="Piyush"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

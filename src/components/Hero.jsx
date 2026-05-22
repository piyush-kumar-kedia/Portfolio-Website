import React from "react";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import AnimatedSection, { Stagger, StaggerItem } from "./AnimatedSection";

const focusPrimary =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50";

export default function Hero() {
  return (
    <AnimatedSection
      id="home"
      className="border-b border-zinc-200/80 bg-gradient-to-b from-white via-zinc-50/70 to-zinc-100/80 pt-[calc(5.5rem+env(safe-area-inset-top))] pb-16 sm:pb-20 md:pt-32 md:pb-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-5 lg:px-8">
        <Stagger className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-10 lg:gap-12">
          
          {/* LEFT CONTENT */}
          <StaggerItem className="w-full flex-1 text-center md:text-left">
            
            <h1 className="text-balance text-[2rem] font-semibold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl lg:text-[4rem] lg:leading-[1.05]">
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 bg-clip-text text-transparent">
                Piyush Kumar Kedia
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-lg text-pretty text-[15px] leading-relaxed text-zinc-600 sm:text-base md:mx-0 md:text-lg">
              I build scalable full-stack applications and deploy
              production-grade systems using{" "}
              <span className="font-medium text-zinc-800">
                React.js
              </span>
              ,{" "}
              <span className="font-medium text-zinc-800">
                Node.js
              </span>
              , and{" "}
              <span className="font-medium text-zinc-800">
                AWS
              </span>{" "}
              — focusing on performance, reliability, and clean user
              experiences.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              
              <a
                href="#projects"
                className={`inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 ${focusPrimary}`}
              >
                View Projects
                <FaArrowRight className="text-xs opacity-90" />
              </a>

              <a
                href="/PIYUSH_KUMAR_KEDIA_CV.pdf"
                download
                className={`inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white/90 px-6 py-3 text-sm font-medium text-zinc-800 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-white ${focusPrimary}`}
              >
                Resume
                <FaDownload className="text-xs opacity-80" />
              </a>

            </div>
          </StaggerItem>

          {/* RIGHT IMAGE */}
          <StaggerItem className="flex w-full shrink-0 justify-center md:w-auto md:justify-end">
            <div className="relative">
              
              {/* Glow */}
              <div
                className="absolute inset-0 scale-105 rounded-full bg-gradient-to-br from-zinc-200/70 to-zinc-100/30 blur-2xl"
                aria-hidden
              />

              {/* Profile Image */}
              <img
                src="profile_pic2.png"
                alt="Piyush Kumar Kedia"
                className="relative h-60 w-60 rounded-full object-cover shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] ring-4 ring-white sm:h-72 sm:w-72 md:h-80 md:w-80"
                fetchPriority="high"
              />
            </div>
          </StaggerItem>

        </Stagger>
      </div>
    </AnimatedSection>
  );
}
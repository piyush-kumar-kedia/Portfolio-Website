import React from "react";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import AnimatedSection, { Stagger, StaggerItem } from "./AnimatedSection";

const focusPrimary =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50";

export default function Hero() {
  return (
    <AnimatedSection
      id="home"
      className="border-b border-zinc-200/80 bg-gradient-to-b from-white/90 via-zinc-50/80 to-zinc-100/90 pt-[calc(5.5rem+env(safe-area-inset-top))] pb-14 sm:pb-16 md:pt-32 md:pb-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-8">
        <Stagger className="flex flex-col items-center gap-10 sm:gap-12 md:flex-row md:items-center md:gap-14 lg:gap-16">
          <StaggerItem className="w-full flex-1 text-center md:text-left">
            <h1 className="text-balance text-[1.65rem] font-semibold tracking-tight text-zinc-900 min-[400px]:text-3xl sm:text-4xl md:text-5xl lg:text-[3.15rem] lg:leading-[1.12]">
              Hi, I’m{" "}
              <span className="bg-gradient-to-br from-zinc-800 to-zinc-600 bg-clip-text text-transparent">
                Piyush Kumar Kedia
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-[15px] leading-relaxed text-zinc-600 sm:mt-5 sm:text-base md:mx-0 md:text-lg">
              I build fast, reliable web applications. As a full-stack developer specializing in the{" "}
              <span className="font-medium text-zinc-800">MERN stack</span> and{" "}
              <span className="font-medium text-zinc-800">AWS</span>, I handle everything from writing the backend logic to deploying the final product to the cloud.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8 md:justify-start">
              <a
                href="#projects"
                className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-[0_1px_2px_rgba(0,0,0,0.08),0_8px_20px_rgba(0,0,0,0.12)] transition hover:bg-zinc-800 sm:px-6 ${focusPrimary}`}
              >
                View projects <FaArrowRight className="text-xs opacity-90" />
              </a>
              <a
                href="/PIYUSH_KUMAR_KEDIA_CV.pdf"
                download
                className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-full border border-zinc-300/90 bg-white/80 px-5 py-2.5 text-sm font-medium text-zinc-800 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-sm transition hover:border-zinc-400 hover:bg-white sm:px-6 ${focusPrimary}`}
              >
                Resume <FaDownload className="text-xs opacity-80" />
              </a>
            </div>
          </StaggerItem>

          <StaggerItem className="flex w-full shrink-0 justify-center md:w-auto md:justify-end">
            <div className="relative w-full max-w-[200px] min-[400px]:max-w-[230px] sm:max-w-[260px] md:max-w-none">
              <div
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-zinc-200/80 via-zinc-100/40 to-transparent blur-xl sm:-inset-4"
                aria-hidden
              />
              <div className="relative mx-auto w-44 overflow-hidden rounded-2xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.2),0_0_0_1px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04] min-[400px]:w-48 sm:w-52 sm:rounded-3xl md:mx-0 md:w-52">
                <img
                  src="profile_pic.jpg"
                  alt="Piyush Kumar Kedia"
                  className="aspect-[5/6] h-auto w-full object-cover object-top sm:aspect-[4/5] md:h-64 md:aspect-auto"
                  fetchPriority="high"
                />
              </div>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </AnimatedSection>
  );
}
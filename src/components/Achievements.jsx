import React from "react";
import AnimatedSection, { Stagger, StaggerItem } from "./AnimatedSection";

export default function Achievements() {
  return (
    <AnimatedSection
      id="achievements"
      className="border-b border-zinc-200/80 bg-white/45 py-14 backdrop-blur-[2px] sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-8">
        <Stagger className="flex flex-col gap-6 sm:gap-8">
          <StaggerItem>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl">
              Achievements
            </h2>
          </StaggerItem>
          <StaggerItem>
            <ul className="max-w-3xl space-y-4 text-[15px] text-zinc-600 sm:text-base md:text-lg">
              <li className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 shadow-sm"
                  aria-hidden
                />
                <span>
                  Qualified{" "}
                  <span className="font-medium text-zinc-900">JEE Advanced</span>{" "}
                  — AIR 5850 (top 0.5%)
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 shadow-sm"
                  aria-hidden
                />
                <span>
                  <span className="font-medium text-zinc-900">JEE Mains</span> —
                  99.63 percentile (100% in Physics)
                </span>
              </li>
            </ul>
          </StaggerItem>
        </Stagger>
      </div>
    </AnimatedSection>
  );
}

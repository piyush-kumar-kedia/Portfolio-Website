import React from "react";
import AnimatedSection, { Stagger, StaggerItem } from "./AnimatedSection";

const rows = [
  {
    title: "B.Tech — Chemical Science and Technology",
    detail:
      "Indian Institute of Technology, Guwahati • 2024 – Present • CGPA: 8.07 (current)",
  },
  {
    title: "Senior Secondary (CBSE)",
    detail: "94.8% • 2024",
  },
  {
    title: "Secondary (CBSE)",
    detail: "96.4% • 2022",
  },
];

export default function Education() {
  return (
    <AnimatedSection
      id="education"
      className="border-b border-zinc-200/80 bg-gradient-to-b from-zinc-50/80 to-zinc-100/40 py-14 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-8">
        <Stagger className="mx-auto flex max-w-3xl flex-col gap-4 sm:gap-5">
          <StaggerItem>
            <h2 className="text-center text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl">
              Education
            </h2>
          </StaggerItem>
          {rows.map((row) => (
            <StaggerItem key={row.title}>
              <div className="rounded-2xl border border-zinc-200/90 bg-white/85 px-4 py-4 shadow-[0_1px_0_rgba(0,0,0,0.04),0_6px_20px_rgba(0,0,0,0.04)] transition hover:border-zinc-300/90 sm:px-6 sm:py-5">
                <div className="text-[15px] font-semibold text-zinc-900 sm:text-base">
                  {row.title}
                </div>
                <div className="mt-1 text-sm text-zinc-600 sm:text-base">
                  {row.detail}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </AnimatedSection>
  );
}

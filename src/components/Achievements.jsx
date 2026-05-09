import React from "react";
import AnimatedSection, { Stagger, StaggerItem } from "./AnimatedSection";

const achievements = [
  {
    title: "JEE Advanced 2024",
    detail: "Qualified with AIR 5850",
    highlight: "Top 0.5% nationwide",
  },
  {
    title: "JEE Main 2024",
    detail: "99.63 percentile",
    highlight: "100/100 in Physics",
  },
  {
    title: "AlgoUniversity Technology Fellowship",
    detail: "Advanced to Stage 2",
    highlight: "Top 8% among 250K+ participants",
  },
];

export default function Achievements() {
  return (
    <AnimatedSection
      id="achievements"
      className="border-b border-zinc-200/80 bg-white/45 py-14 backdrop-blur-[2px] sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-8">
        <Stagger className="flex flex-col gap-8">
          <StaggerItem>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl">
              Achievements
            </h2>
          </StaggerItem>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="rounded-2xl border border-zinc-200/70 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md">
                  <h3 className="text-base font-semibold text-zinc-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-600">
                    {item.detail}
                  </p>

                  <p className="mt-3 text-sm font-medium text-zinc-900">
                    {item.highlight}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </div>
    </AnimatedSection>
  );
}
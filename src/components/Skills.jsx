import React from "react";
import { skills } from "../data/skills";
import AnimatedSection, { Stagger, StaggerItem } from "./AnimatedSection";

export default function Skills() {
  return (
    <AnimatedSection
      id="skills"
      className="border-b border-zinc-200/80 bg-white/50 py-14 backdrop-blur-[2px] sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-8">
        <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          <StaggerItem className="sm:col-span-2 lg:col-span-3">
            <h2 className="text-center text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl">
              Skills
            </h2>
          </StaggerItem>
          {Object.entries(skills).map(([group, list]) => (
            <StaggerItem key={group}>
              <div className="h-full rounded-2xl border border-zinc-200/90 bg-white/90 p-5 shadow-[0_1px_0_rgba(0,0,0,0.04),0_8px_28px_rgba(0,0,0,0.05)] transition hover:border-zinc-300/90 hover:shadow-[0_12px_36px_rgba(0,0,0,0.07)] sm:p-6">
                <h4 className="text-sm font-semibold capitalize tracking-wide text-zinc-900">
                  {group}
                </h4>
                <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                  {list.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200/80 sm:px-3"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </AnimatedSection>
  );
}

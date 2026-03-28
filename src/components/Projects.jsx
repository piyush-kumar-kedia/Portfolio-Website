import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projectData.jsx";
import AnimatedSection, { Stagger, StaggerItem } from "./AnimatedSection";

export default function Projects() {
  return (
    <AnimatedSection
      id="projects"
      className="relative overflow-hidden border-y border-zinc-300/60 bg-zinc-300/50 py-16 sm:py-20 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(255,255,255,0.65),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-zinc-400/15 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-5 lg:px-8">
        <Stagger className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 md:gap-8 lg:gap-10">
          <StaggerItem className="md:col-span-2">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl">
              Projects
            </h2>
          </StaggerItem>
          {projects.map((p) => (
            <StaggerItem key={p.id}>
              <ProjectCard project={p} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </AnimatedSection>
  );
}

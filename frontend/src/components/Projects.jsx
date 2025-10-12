import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projectData.jsx";
import AnimatedSection from "./AnimatedSection.jsx";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-amber-400">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

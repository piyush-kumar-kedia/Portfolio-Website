import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-5 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      
      {/* Project Image */}
      <div className="w-full h-64 md:h-72 overflow-hidden rounded-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Project Title */}
      <h3 className="mt-4 font-semibold text-amber-400 text-xl md:text-2xl">
        {project.title}
      </h3>

      {/* Project Description */}
      <p className="text-gray-300 mt-2 text-sm md:text-base leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs md:text-sm px-2 py-1 bg-gray-700 text-gray-200 rounded-md shadow-sm"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-4 flex gap-4">
        {project.github && (
          <a
            href={project.github}
            className="text-amber-400 hover:text-amber-500 underline text-sm md:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            className="text-amber-400 hover:text-amber-500 underline text-sm md:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>
        )}
      </div>
    </div>
  );
}

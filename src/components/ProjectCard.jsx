import React from "react";

const linkClass =
  "text-sm font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-4 transition hover:text-zinc-900 hover:decoration-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm";

export default function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/95 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05),0_4px_12px_rgba(0,0,0,0.06),0_20px_40px_-12px_rgba(0,0,0,0.14)] ring-1 ring-zinc-900/[0.04] transition duration-300 hover:border-zinc-300 hover:shadow-[0_2px_4px_rgba(0,0,0,0.06),0_8px_20px_rgba(0,0,0,0.08),0_28px_56px_-12px_rgba(0,0,0,0.18)] sm:rounded-[1.35rem]">
      <div className="border-b border-zinc-100 bg-gradient-to-b from-zinc-100/90 to-zinc-200/50 p-3 sm:p-4">
        <div className="overflow-hidden rounded-xl bg-white shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-zinc-900/[0.06]">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-44 w-full object-contain transition duration-500 group-hover:scale-[1.02] sm:h-52 md:h-56 lg:h-60"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
        <h3 className="text-base font-semibold tracking-tight text-zinc-900 sm:text-lg md:text-xl">
          {project.title}
        </h3>
        <div className="mt-2 text-sm leading-relaxed text-zinc-600 sm:text-[15px]">
          {project.description}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-zinc-200/90 bg-zinc-50 px-2.5 py-0.5 text-[11px] font-medium text-zinc-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:text-xs"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-4 border-t border-zinc-100 pt-4 sm:gap-5">
          {project.github && (
            <a href={project.github} className={linkClass} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} className={linkClass} target="_blank" rel="noopener noreferrer">
              Live site
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

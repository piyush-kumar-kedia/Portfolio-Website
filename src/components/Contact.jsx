import React from "react";
import AnimatedSection, { Stagger, StaggerItem } from "./AnimatedSection";

const linkClass =
  "break-all font-medium text-zinc-800 underline decoration-zinc-300 underline-offset-[3px] transition hover:text-zinc-950 hover:decoration-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 rounded-sm";

export default function Contact() {
  const rows = [
    {
      label: "Personal",
      href: "mailto:piyushkumarkedia02221@gmail.com",
      text: "piyushkumarkedia02221@gmail.com",
      external: false,
    },
    {
      label: "College",
      href: "mailto:piyush.kedia@iitg.ac.in",
      text: "piyush.kedia@iitg.ac.in",
      external: false,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/piyush-kumar-kedia",
      text: "piyush-kumar-kedia",
      external: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/piyush-kumar-kedia",
      text: "piyush-kumar-kedia",
      external: true,
    },
  ];

  return (
    <AnimatedSection
      id="contact"
      className="bg-gradient-to-b from-zinc-100/60 to-zinc-200/40 py-14 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-8">
        <Stagger className="flex flex-col gap-6 sm:gap-8">
          <StaggerItem>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl">
              Contact
            </h2>
          </StaggerItem>
          <StaggerItem>
            <div className="max-w-xl rounded-2xl border border-zinc-200/90 bg-white/90 p-5 shadow-[0_1px_0_rgba(0,0,0,0.04),0_16px_40px_rgba(0,0,0,0.08)] backdrop-blur-sm sm:p-6 md:p-8">
              <dl className="space-y-4 sm:space-y-5">
                {rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-col gap-0.5 border-b border-zinc-100 pb-4 last:border-0 last:pb-0 sm:flex-row sm:items-baseline sm:gap-6 sm:pb-5"
                  >
                    <dt className="w-24 shrink-0 text-[11px] font-semibold uppercase tracking-wider text-zinc-500 sm:w-28 sm:text-xs">
                      {row.label}
                    </dt>
                    <dd className="min-w-0 text-sm sm:text-base">
                      <a
                        href={row.href}
                        className={linkClass}
                        {...(row.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {row.text}
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </AnimatedSection>
  );
}

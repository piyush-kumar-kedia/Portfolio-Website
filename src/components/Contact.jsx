import React from "react";
import {
  Mail,
  GraduationCap,
  Github,
  Linkedin,
} from "lucide-react";

import AnimatedSection, {
  Stagger,
  StaggerItem,
} from "./AnimatedSection";

const contacts = [
  {
    icon: Mail,
    label: "Personal",
    href: "mailto:piyushkumarkedia02221@gmail.com",
    text: "piyushkumarkedia02221@gmail.com",
  },
  {
    icon: GraduationCap,
    label: "College",
    href: "mailto:piyush.kedia@iitg.ac.in",
    text: "piyush.kedia@iitg.ac.in",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/piyush-kumar-kedia",
    text: "linkedin.com/in/piyush-kumar-kedia",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/piyush-kumar-kedia",
    text: "github.com/piyush-kumar-kedia",
  },
];

export default function Contact() {
  return (
    <AnimatedSection
      id="contact"
      className="bg-gradient-to-b from-zinc-100/60 to-zinc-200/40 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Stagger className="flex flex-col gap-10">
          <StaggerItem>
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                Contact
              </h2>

              <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base">
                Open to software engineering internships, collaboration
                opportunities, and interesting technical discussions.
              </p>
            </div>
          </StaggerItem>

          <div className="grid gap-4 sm:grid-cols-2">
            {contacts.map((item, idx) => {
              const Icon = item.icon;

              return (
                <StaggerItem key={idx}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition group-hover:bg-zinc-900 group-hover:text-white">
                      <Icon size={20} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                        {item.label}
                      </p>

                      <p className="truncate text-sm font-medium text-zinc-900 sm:text-base">
                        {item.text}
                      </p>
                    </div>
                  </a>
                </StaggerItem>
              );
            })}
          </div>
        </Stagger>
      </div>
    </AnimatedSection>
  );
}
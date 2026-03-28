import React from "react";
import AnimatedSection, { Stagger, StaggerItem } from "./AnimatedSection";

const em = "font-medium text-zinc-900";

export default function About() {
  return (
    <AnimatedSection
      id="about"
      className="border-b border-zinc-200/80 bg-white/40 py-14 backdrop-blur-[2px] sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-8">
        <Stagger className="flex flex-col gap-6 sm:gap-8">
          <StaggerItem>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl">
              About me
            </h2>
          </StaggerItem>
          <StaggerItem>
            <div className="max-w-3xl space-y-5 text-[15px] leading-relaxed text-zinc-600 sm:space-y-6 sm:text-base md:text-lg">
              <p>
                I’m <span className={em}>Piyush Kumar Kedia</span>, an
                undergraduate at{" "}
                <span className={em}>Indian Institute of Technology, Guwahati</span>{" "}
                pursuing a B.Tech in{" "}
                <span className={em}>Chemical Science and Technology</span>.
              </p>

              <p>
                I care about{" "}
                <span className={em}>software development</span>—especially{" "}
                <span className={em}>scalable web applications</span> and systems
                end-to-end, from APIs to deployment on AWS.
              </p>

              <p>
                I contribute through the{" "}
                <span className={em}>Coding Club</span> and the{" "}
                <span className={em}>
                  Research & Industrial Conclave WebOps team
                </span>{" "}
                at IITG, on platforms used across campus.
              </p>

              <p>
                I’m deepening{" "}
                <span className={em}>data structures & algorithms</span> and
                full-stack practice toward a strong internship in my third year.
              </p>

              <p className="text-zinc-500">
                Outside work: puzzles, new tools, and small workflow improvements.
              </p>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </AnimatedSection>
  );
}

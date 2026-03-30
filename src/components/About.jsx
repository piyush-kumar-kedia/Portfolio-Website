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
                I care deeply about <span className={em}>software development</span>—especially building{" "}
                <span className={em}>scalable web applications</span> and owning systems end-to-end, from crafting efficient APIs to managing production deployments on AWS.
              </p>

              <p>
                Being a part of the <span className={em}>Coding Club IITG</span>, the{" "}
                <span className={em}>Student Web Committee IITG</span>, and the{" "}
                <span className={em}>Research and Industrial Conclave IITG</span>, I actively contribute to building high-impact websites that solve real problems for our campus community and see heavy daily use.
              </p>

              <p>
                My technical expertise is rooted in <span className={em}>Full Stack Development</span> using{" "}
                <span className={em}>React, Tailwind CSS, Node.js,</span> and{" "}
                <span className={em}>MongoDB</span>. I also bring strong hands-on experience with infrastructure and cloud hosting, deploying applications on <span className={em}>AWS EC2</span> using <span className={em}>Nginx, Route 53, Load Balancers,</span> and securing them with <span className={em}>Certbot (HTTPS)</span>.
              </p>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </AnimatedSection>
  );
}
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen font-sans text-zinc-800 bg-zinc-100 bg-[radial-gradient(ellipse_100%_60%_at_50%_-10%,rgba(24,24,27,0.06),transparent_55%),linear-gradient(180deg,#fafafa_0%,#f4f4f5_45%,#e4e4e7_100%)]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-[max(1rem,env(safe-area-inset-top))] focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-zinc-900 focus:shadow-[0_4px_24px_rgba(0,0,0,0.12)] focus:ring-2 focus:ring-zinc-300 focus:ring-offset-2 focus:ring-offset-zinc-100"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

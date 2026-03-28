import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const MotionNav = motion.nav;
const MotionA = motion.a;
const MotionSpan = motion.span;

const logoClass =
  "text-[14px] font-semibold tracking-tight text-zinc-900 sm:text-[15px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white/90 rounded-md";

const desktopLinkClass =
  "group relative inline-flex flex-col items-center text-[13px] font-medium text-zinc-600 transition-colors hover:text-zinc-900 focus-visible:outline-none focus-visible:text-zinc-900 rounded-full px-2.5 py-2 sm:px-3 sm:text-sm";

const underlineClass =
  "pointer-events-none mt-0.5 h-[2px] w-[calc(100%-0.25rem)] max-w-[4.5rem] origin-center scale-x-0 rounded-full bg-zinc-900 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return undefined;
  }, [isOpen]);

  const navItems = [
    "About",
    "Projects",
    "Skills",
    "Education",
    "Achievements",
    "Contact",
  ];

  const goToSection = (id, hash) => {
    document.body.style.overflow = "";
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    try {
      window.history.replaceState(null, "", hash);
    } catch {
      /* ignore */
    }
  };

  const handleMobileNavClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (!href?.startsWith("#")) return;
    const id = href.slice(1);
    setIsOpen(false);
    window.setTimeout(() => {
      goToSection(id, href);
    }, 0);
  };

  return (
    <MotionNav
      className={`fixed top-0 left-0 z-[100] w-full border-b backdrop-blur-xl transition-colors duration-300 ${
        scrolled
          ? "border-zinc-200/95 bg-white/80 shadow-[0_1px_0_rgba(0,0,0,0.05),0_12px_40px_-8px_rgba(0,0,0,0.1)]"
          : "border-zinc-200/70 bg-white/65 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
      }`}
      style={{ paddingTop: "max(0px, env(safe-area-inset-top))" }}
      aria-label="Primary"
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-3.5 md:px-6 md:py-4">
        <MotionA
          href="#home"
          className={logoClass}
          whileTap={{ scale: 0.98 }}
          onClick={() => isOpen && setIsOpen(false)}
        >
          Piyush Kedia
        </MotionA>

        <div className="hidden items-center gap-0.5 md:flex lg:gap-1">
          {navItems.map((item) => (
            <MotionA
              key={item}
              href={`#${item.toLowerCase()}`}
              className={desktopLinkClass}
              whileHover={{ y: -1 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <span className="relative z-10 leading-tight">{item}</span>
              <span aria-hidden className={underlineClass} />
            </MotionA>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="flex h-11 min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-xl text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav-panel"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <MotionSpan
            key={isOpen ? "x" : "menu"}
            initial={{ opacity: 0.6, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.15 }}
            className="flex"
          >
            {isOpen ? (
              <X size={22} strokeWidth={1.75} aria-hidden />
            ) : (
              <Menu size={22} strokeWidth={1.75} aria-hidden />
            )}
          </MotionSpan>
        </button>
      </div>

      <div
        id="mobile-nav-panel"
        className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="min-h-0 overflow-hidden border-t border-zinc-200/80 bg-white/98 shadow-[0_12px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl">
          <nav
            className="max-h-[min(75vh,26rem)] overflow-x-hidden overflow-y-auto overscroll-contain px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2"
            aria-label="Mobile"
          >
            <ul className="flex flex-col gap-0.5 py-2">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={handleMobileNavClick}
                    className="flex min-h-[48px] items-center rounded-xl px-3 py-3 text-[16px] font-medium text-zinc-800 transition-colors hover:bg-zinc-100 active:bg-zinc-200/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-inset [-webkit-tap-highlight-color:transparent]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </MotionNav>
  );
}

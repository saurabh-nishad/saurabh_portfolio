"use client";

import { useEffect, useRef } from "react";

const LINKEDIN_URL = "https://www.linkedin.com/in/saurabh-nishad";
const GITHUB_URL = "https://github.com/saurabh-nishad";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.target.classList.toggle("visible", e.isIntersecting));
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="section-reveal min-h-screen flex flex-col justify-center px-4 sm:px-6 pt-24 pb-20 max-w-4xl mx-auto"
    >
      <p className="text-accent-green font-mono text-sm mb-4">Embedded Architect · IoT · Hardware-Firmware</p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
        Saurabh Nishad
      </h1>
      <p className="text-xl sm:text-2xl text-slate-300 mb-6">
        Embedded Architect | IoT Product Developer | Hardware-Firmware Innovator
      </p>
      <p className="text-slate-400 text-lg max-w-2xl mb-10">
        I build connected products from schematic to firmware to cloud—across industrial, automotive,
        wearable, and medical-adjacent systems.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href="#projects"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-accent-green text-white font-medium hover:bg-accent-green/90 transition-colors shadow-lg shadow-accent-green/20"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-[var(--border)] text-slate-300 hover:bg-surface-700 hover:text-white hover:border-accent-green/40 transition-colors"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-[var(--border)] text-slate-300 hover:bg-surface-700 hover:text-white hover:border-accent-green/40 transition-colors"
        >
          Contact Me
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-[var(--border)] text-slate-300 hover:bg-surface-700 hover:text-white hover:border-accent-blue/40 transition-colors"
          aria-label="LinkedIn profile"
        >
          LinkedIn
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-[var(--border)] text-slate-300 hover:bg-surface-700 hover:text-white hover:border-accent-green/40 transition-colors"
          aria-label="GitHub profile"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

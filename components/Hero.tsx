"use client";

import { useEffect, useRef } from "react";
import { withBasePath } from "@/lib/basePath";

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
      className="section-reveal min-h-screen flex flex-col md:flex-row md:items-center gap-8 md:gap-12 px-4 sm:px-6 lg:px-8 pt-24 pb-20 max-w-6xl mx-auto"
    >
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
          Saurabh Nishad
        </h1>
        <p className="text-xl sm:text-2xl text-slate-300 mb-6">
          Deep-Tech Product Architect | Embedded Systems Leader | Neurotech, IoT & Connected Devices
        </p>
        <p className="text-slate-400 text-lg max-w-2xl mb-4">
          I build high-complexity products across wearables, neurotechnology, industrial IoT, smart hardware, and edge-connected systems — combining electronics, embedded firmware, wireless connectivity, system architecture, and productization strategy into scalable real-world solutions.
        </p>
        <p className="text-slate-400 text-base max-w-2xl mb-6">
          With 9+ years of experience across semiconductor platforms, startups, and product teams, I help transform technically difficult ideas into reliable, commercially relevant products.
        </p>
        <p className="text-accent-green font-mono text-sm mb-8">
          9+ Years | Semiconductor + Startup + Product Engineering | Hardware-to-Cloud Capability | Patent + Publication
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-accent-green text-white font-medium hover:bg-accent-green/90 transition-colors shadow-lg shadow-accent-green/20"
          >
            View Flagship Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-[var(--border)] text-slate-300 hover:bg-surface-700 hover:text-white hover:border-accent-green/40 transition-colors"
          >
            Work With Me
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-[var(--border)] text-slate-300 hover:bg-surface-700 hover:text-white hover:border-accent-green/40 transition-colors"
          >
            Investor / Collaboration Inquiry
          </a>
          <a
            href={withBasePath("/resume.pdf")}
            download
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-[var(--border)] text-slate-300 hover:bg-surface-700 hover:text-white hover:border-accent-green/40 transition-colors"
          >
            Download Resume
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
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div
          className="w-full max-w-4xl md:max-w-6xl aspect-square rounded-2xl bg-cover bg-center bg-no-repeat shadow-2xl shadow-black/30"
          style={{ backgroundImage: `url(${withBasePath("/background.png")})` }}
          role="img"
          aria-label="Hero visual"
        />
      </div>
    </section>
  );
}

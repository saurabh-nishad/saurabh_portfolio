"use client";

import { useEffect, useRef } from "react";

export default function CTA() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.target.classList.toggle("visible", e.isIntersecting));
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="cta"
      ref={ref}
      className="section-reveal py-20 px-4 sm:px-6 border-t border-[var(--border)] bg-surface-800/30"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Let&apos;s Build the Next High-Impact Product
        </h2>
        <p className="text-slate-400 leading-relaxed mb-10">
          Whether you are building a wearable, neurotech device, connected system, smart hardware product, or edge-intelligent platform, I can help shape the architecture, de-risk the engineering, and accelerate the path to a real product.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-accent-green text-white font-medium hover:bg-accent-green/90 transition-colors shadow-lg shadow-accent-green/20"
          >
            Start a Conversation
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-[var(--border)] text-slate-300 hover:bg-surface-700 hover:text-white hover:border-accent-green/40 transition-colors"
          >
            Discuss a Project
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-[var(--border)] text-slate-300 hover:bg-surface-700 hover:text-white hover:border-accent-green/40 transition-colors"
          >
            Investor / Partnership Inquiry
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-[var(--border)] text-slate-300 hover:bg-surface-700 hover:text-white hover:border-accent-green/40 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";

const HIGHLIGHTS = [
  "IEEE publication demonstrating technical depth and applied engineering rigor",
  "Patent-backed innovation reflecting novel product and system thinking",
  "Technical speaking, mentoring, and support across engineering communities",
  "Strong record of working across research, product development, and implementation",
];

export default function PublicationsInnovation() {
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
      id="publications"
      ref={ref}
      className="section-reveal py-20 px-4 sm:px-6 border-t border-[var(--border)]"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Publications, Innovation & Recognition
        </h2>
        <p className="text-slate-400 leading-relaxed mb-8">
          My work reflects both engineering execution and innovation-oriented thinking.
        </p>
        <ul className="space-y-4">
          {HIGHLIGHTS.map((item) => (
            <li
              key={item}
              className="flex gap-3 items-start p-4 rounded-xl bg-surface-800/80 border border-[var(--border)]"
            >
              <span className="text-accent-green shrink-0 mt-0.5">•</span>
              <span className="text-slate-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

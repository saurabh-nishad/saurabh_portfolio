"use client";

import { useEffect, useRef } from "react";

const ITEMS = [
  "I build across hardware, firmware, connectivity, and system architecture",
  "I work on deep-tech products with real-world constraints and scale considerations",
  "I bring experience from semiconductors, startups, and product engineering environments",
  "I help turn ideas into MVPs, prototypes, architecture roadmaps, and product-ready systems",
  "I am especially strong in wearables, neurotech, IoT, edge intelligence, and connected devices",
];

export default function QuickValueStrip() {
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
      id="value-strip"
      ref={ref}
      className="section-reveal py-16 px-4 sm:px-6 border-t border-[var(--border)] bg-surface-800/30"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 text-center">
          Why founders, investors, and product teams work with me
        </h2>
        <ul className="space-y-4">
          {ITEMS.map((item) => (
            <li
              key={item}
              className="flex gap-3 items-start p-4 rounded-xl bg-surface-800/80 border border-[var(--border)] hover:border-accent-green/25 transition-colors"
            >
              <span className="text-accent-green shrink-0 mt-0.5" aria-hidden="true">
                —
              </span>
              <span className="text-slate-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

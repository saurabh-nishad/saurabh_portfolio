"use client";

import { useEffect, useRef } from "react";

const GROUPS = [
  {
    title: "Startups & Founders",
    description: "For early-stage companies building their first connected hardware, wearable, or embedded product.",
  },
  {
    title: "Product Teams",
    description: "For organizations that need architecture leadership, embedded acceleration, or reliable system integration.",
  },
  {
    title: "Investors & Venture Builders",
    description: "For teams evaluating technical feasibility, product risk, architecture depth, and execution strength in deep-tech opportunities.",
  },
  {
    title: "Innovation Programs",
    description: "For groups exploring next-generation products in neurotech, wearables, smart hardware, intelligent devices, and connected platforms.",
  },
];

export default function WhoIWorkWith() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.target.classList.toggle("visible", e.isIntersecting));
      },
      { threshold: 0.05, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="who-i-work-with"
      ref={ref}
      className="section-reveal py-20 px-4 sm:px-6 border-t border-[var(--border)]"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Who I Work With</h2>
        <p className="text-slate-400 mb-10 max-w-2xl">
          I collaborate best with teams and organizations building technically demanding products that need strong architecture and practical execution.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {GROUPS.map((g) => (
            <div
              key={g.title}
              className="bg-surface-800/80 rounded-xl p-5 border border-[var(--border)] hover:border-accent-green/25 transition-colors"
            >
              <h3 className="font-semibold text-white mb-2">{g.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{g.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

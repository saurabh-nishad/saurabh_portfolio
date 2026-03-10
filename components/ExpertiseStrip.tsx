"use client";

import { useEffect, useRef } from "react";

const TAGS = [
  "Embedded Systems Expert",
  "IoT Expert",
  "STM32 Expert",
  "Technical Expert",
  "Product Development Support",
  "Firmware Expert",
  "Embedded Linux",
  "Hardware Design",
  "Connected Devices",
  "Neurotech & Wearables",
];

export default function ExpertiseStrip() {
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
      ref={ref}
      className="section-reveal py-6 px-4 sm:px-6 border-t border-[var(--border)] bg-surface-800/20"
      aria-label="Technical expertise"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-slate-400 text-sm mb-3">
          Saurabh Nishad — Embedded systems expert · IoT expert · STM32 expert · Technical expert · Product development support
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-surface-700/80 text-slate-300 border border-[var(--border)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

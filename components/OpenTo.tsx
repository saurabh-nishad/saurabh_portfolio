"use client";

import { useEffect, useRef } from "react";

const ITEMS = [
  "Product architecture consulting",
  "Fractional CTO / technical advisory conversations",
  "Startup collaboration and founding-engineer discussions",
  "Neurotech and wearable product partnerships",
  "Embedded systems leadership roles",
  "Investor-backed deep-tech product development",
  "Technical diligence and architecture review engagements",
];

export default function OpenTo() {
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
      id="open-to"
      ref={ref}
      className="section-reveal py-20 px-4 sm:px-6 border-t border-[var(--border)]"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Open To</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {ITEMS.map((item) => (
            <li
              key={item}
              className="flex gap-2 items-center p-3 rounded-lg bg-surface-800/80 border border-[var(--border)]"
            >
              <span className="text-accent-green shrink-0">—</span>
              <span className="text-slate-300 text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

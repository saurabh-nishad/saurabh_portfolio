"use client";

import { useEffect, useRef } from "react";

const EXPERTISE = [
  "Embedded architecture",
  "IoT systems",
  "Product development",
  "Firmware engineering",
  "Embedded hardware design",
  "Wireless and cloud connectivity",
  "Edge AI and signal-processing based devices",
  "Technical training and customer enablement",
];

export default function About() {
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
      id="about"
      ref={ref}
      className="section-reveal py-20 px-4 sm:px-6 border-t border-[var(--border)]"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">About</h2>
        <p className="text-slate-400 leading-relaxed mb-6">
          With over nine years of experience, I have worked with semiconductor companies, startups,
          and product teams to deliver embedded and IoT solutions from concept to production. I bring
          strong expertise across embedded architecture, IoT systems, product development, firmware
          engineering, and hardware design—as well as wireless and cloud connectivity, edge AI, and
          technical training.
        </p>
        <p className="text-slate-400 leading-relaxed mb-8">
          I have operated in both individual contributor and leadership roles—driving reference
          design development, customer support, architecture definition, prototype validation, and
          product innovation for industrial, automotive, wearable, and medical-adjacent systems.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
          {EXPERTISE.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-accent-green" aria-hidden="true">
                —
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

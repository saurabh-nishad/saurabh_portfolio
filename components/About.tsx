"use client";

import { useEffect, useRef } from "react";

const AREAS = [
  "Neurotechnology and wearable systems",
  "Industrial IoT and connected hardware",
  "Automotive and smart access systems",
  "AI-enabled edge devices",
  "Consumer electronics and smart sensing products",
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
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">About Me</h2>
        <p className="text-slate-400 leading-relaxed mb-6">
          I am an embedded systems and product architecture leader focused on building real-world deep-tech products.
        </p>
        <p className="text-slate-400 leading-relaxed mb-6">
          Over the last 9+ years, I have worked across semiconductor companies, startups, and product teams to turn complex engineering challenges into deployable systems. My work spans electronics architecture, embedded firmware, low-power design, wireless protocols, cloud connectivity, embedded Linux, RTOS-based systems, sensor integration, and product validation.
        </p>
        <p className="text-slate-400 leading-relaxed mb-8">
          What makes my approach different is that I do not treat hardware, firmware, connectivity, and product strategy as separate silos. I help define the entire product stack — from core architecture and integration choices to performance, reliability, manufacturing readiness, and long-term scalability.
        </p>
        <p className="text-slate-300 font-medium mb-3">I have contributed to products and platforms across:</p>
        <ul className="space-y-2 text-slate-400">
          {AREAS.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-accent-green" aria-hidden="true">—</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-slate-400 leading-relaxed mt-8">
          I am most valuable where the problem is technically demanding, cross-disciplinary, and commercially important.
        </p>
      </div>
    </section>
  );
}

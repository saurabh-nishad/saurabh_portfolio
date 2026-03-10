"use client";

import { useEffect, useRef } from "react";

const FOCUS_AREAS = [
  {
    title: "Neurotech & Wearable Systems",
    copy:
      "I work on next-generation products involving biosignal sensing, neurofeedback, neurostimulation, smart wearables, and integrated bioelectronics. These systems demand strong architecture across signal integrity, power, embedded control, form factor constraints, and user safety.",
  },
  {
    title: "Connected IoT & Smart Hardware",
    copy:
      "I design and lead systems that combine embedded electronics, sensors, wireless protocols, cloud integration, and field reliability. This includes connected asset trackers, smart locks, industrial devices, gateways, and remote monitoring platforms.",
  },
  {
    title: "Edge Intelligence & Human-Centered Devices",
    copy:
      "I build systems where sensing, intelligence, and interaction come together — including voice-triggered devices, low-power intelligent products, sensor fusion systems, and context-aware embedded devices.",
  },
];

export default function WhatIBuild() {
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
      id="what-i-build"
      ref={ref}
      className="section-reveal py-20 px-4 sm:px-6 border-t border-[var(--border)]"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">What I Build</h2>
        <p className="text-slate-400 mb-12 max-w-2xl">
          My work sits at the intersection of deep-tech engineering and product creation. I focus on systems that are difficult to build, valuable to deploy, and meaningful to scale.
        </p>
        <div className="space-y-8">
          {FOCUS_AREAS.map((area) => (
            <div
              key={area.title}
              className="bg-surface-800/80 rounded-xl p-6 border border-[var(--border)] hover:border-accent-green/25 transition-colors"
            >
              <h3 className="text-lg font-semibold text-accent-green mb-3">{area.title}</h3>
              <p className="text-slate-400 leading-relaxed">{area.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

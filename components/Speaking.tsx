"use client";

import { useEffect, useRef } from "react";

export default function Speaking() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.target.classList.toggle("visible", e.isIntersecting));
      },
      { threshold: 0.2, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="speaking"
      ref={ref}
      className="section-reveal py-20 px-4 sm:px-6 border-t border-[var(--border)]"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Speaking, Training & Technical Enablement
        </h2>
        <p className="text-slate-400 leading-relaxed">
          I have delivered customer trainings at STMicroelectronics and presented at conferences and
          academic/industry forums. I focus on translating deep embedded systems knowledge into
          practical product outcomes—helping teams and customers move from concept to production
          with clear architecture, reference designs, and hands-on enablement.
        </p>
      </div>
    </section>
  );
}

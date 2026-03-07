"use client";

import { useEffect, useRef } from "react";

export default function Education() {
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
      id="education"
      ref={ref}
      className="section-reveal py-20 px-4 sm:px-6 border-t border-[var(--border)]"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Education</h2>
        <div className="bg-surface-800/80 rounded-xl p-6 border border-[var(--border)]">
          <h3 className="text-lg font-semibold text-white">B.Tech in Instrumentation and Control Engineering</h3>
          <p className="text-slate-400 mt-1">Galgotias College of Engineering and Technology</p>
          <p className="text-slate-500 text-sm font-mono mt-2">2012 – 2016</p>
        </div>
      </div>
    </section>
  );
}

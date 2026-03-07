"use client";

import { useEffect, useRef } from "react";

const ACHIEVEMENTS = [
  {
    icon: "mic",
    title: "IoT on Edge Device Taking to Cloud",
    detail: "Presented at AICTE-sponsored ATAL FDP on Internet of Things, 2021",
  },
  {
    icon: "doc",
    title: "Low-Cost Smartphone Controlled Wireless UAV",
    detail: "Published research paper at IEEE International Conference on Sustainable Energy, Electronics & Computing Systems, 2018",
  },
  {
    icon: "patent",
    title: "Automated Cell Counting Device",
    detail: "Holds provisional patent for early detection of Leukemia and other blood disorders",
  },
  {
    icon: "teach",
    title: "Industrial IoT: Vertical Applications",
    detail: "Delivered tutorial at IEEE International Conference on Sustainable Energy, Electronics & Computing Systems, 2018",
  },
  {
    icon: "badge",
    title: "Imagine Cup & Microsoft Student Partner",
    detail: "Completed Microsoft technology project as MSP specializing in Microsoft IoT technologies",
  },
];

function Icon({ name }: { name: string }) {
  const cls = "w-6 h-6 text-accent-green shrink-0";
  switch (name) {
    case "mic":
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v3m0 0V6a7 7 0 0114 0v6z" />
        </svg>
      );
    case "doc":
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    case "patent":
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      );
    case "teach":
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    case "badge":
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      );
    default:
      return <span className={cls}>•</span>;
  }
}

export default function Achievements() {
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
      id="achievements"
      ref={ref}
      className="section-reveal py-20 px-4 sm:px-6 border-t border-[var(--border)]"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Achievements</h2>
        <p className="text-slate-400 mb-12">Speaking, publications, patents, and recognition.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {ACHIEVEMENTS.map((a) => (
            <div
              key={a.title}
              className="flex gap-4 p-4 rounded-xl bg-surface-800/80 border border-[var(--border)] hover:border-accent-green/20 transition-colors"
            >
              <Icon name={a.icon} />
              <div>
                <h3 className="font-semibold text-white text-sm sm:text-base">{a.title}</h3>
                <p className="text-slate-400 text-sm mt-0.5">{a.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

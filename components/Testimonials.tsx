"use client";

import { useEffect, useRef } from "react";

const TESTIMONIALS = [
  {
    quote:
      "Saurabh combines deep embedded expertise with strong product thinking.",
    attribution: "Collaborator",
  },
  {
    quote:
      "He is able to move from architecture to implementation without losing clarity.",
    attribution: "Collaborator",
  },
  {
    quote:
      "A rare engineer who understands both technical complexity and product direction.",
    attribution: "Collaborator",
  },
];

export default function Testimonials() {
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
      id="testimonials"
      ref={ref}
      className="section-reveal py-20 px-4 sm:px-6 border-t border-[var(--border)]"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">What Collaborators Value</h2>
        <p className="text-slate-400 mb-8">
          Add 2–3 concise testimonials here from managers, founders, clients, or collaborators.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.quote}
              className="bg-surface-800/80 rounded-xl p-6 border border-[var(--border)] hover:border-accent-green/20 transition-colors"
            >
              <p className="text-slate-300 italic">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-4 text-sm text-accent-green font-medium">{t.attribution}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

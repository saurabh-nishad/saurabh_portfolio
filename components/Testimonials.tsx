"use client";

import { useEffect, useRef } from "react";

const TESTIMONIALS = [
  {
    quote:
      "Strong customer enablement and technical support—helped our team get to production faster with ST platforms.",
    attribution: "Customer enablement at ST",
  },
  {
    quote:
      "Clear product architecture and firmware strategy that aligned hardware, connectivity, and cloud from day one.",
    attribution: "Product architecture consulting",
  },
  {
    quote:
      "Cross-functional leadership across hardware and firmware with a focus on shipped systems and measurable impact.",
    attribution: "Cross-functional hardware + firmware leadership",
  },
  {
    quote:
      "Instrumental in accelerating our go-to-market with reference designs and hands-on validation support.",
    attribution: "Startup acceleration and go-to-market support",
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
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Testimonials & Trust</h2>
        <p className="text-slate-400 mb-12">What teams and partners say about working with me.</p>
        <div className="grid gap-6 sm:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.attribution}
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

"use client";

import { useEffect, useRef } from "react";

type Role = {
  company: string;
  title: string;
  description: string;
};

const ROLES: Role[] = [
  {
    company: "Motive Technologies",
    title: "Senior Software Engineer",
    description:
      "I work on Vehicle Gateway and Asset Gateway development, telematics systems, and connected fleet solutions. My contributions include feature design and development for gateways, test coverage and reliability improvements, packet overhead optimization, and cost-benefit analysis that delivered measurable optimization outcomes.",
  },
  {
    company: "LG Electronics",
    title: "Senior Research Engineer",
    description:
      "I lead and contribute to advanced product and research initiatives involving embedded systems, smart hardware, and next-generation user experiences. My work includes translating technical opportunities into practical product direction while balancing architecture, feasibility, and execution.",
  },
  {
    company: "Neuphony",
    title: "Technical Leadership & Product Development",
    description:
      "I have led and supported innovation around neurotechnology wearables, neurofeedback systems, stimulation-enabled concepts, and product-definition efforts that bridge emerging technology and usable hardware experiences.",
  },
  {
    company: "STMicroelectronics",
    title: "Senior Lead Engineer",
    description:
      "At STMicroelectronics, I strengthened my grounding in embedded platforms, customer-focused system development, semiconductor ecosystems, and robust product engineering. This experience sharpened both technical rigor and platform-level thinking.",
  },
];

export default function Experience() {
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
      id="experience"
      ref={ref}
      className="section-reveal py-20 px-4 sm:px-6 border-t border-[var(--border)]"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Professional Journey</h2>
        <div className="space-y-6 mb-10">
          {ROLES.map((role) => (
            <article
              key={`${role.company}-${role.title}`}
              className="bg-surface-800/80 rounded-xl p-6 border border-[var(--border)] hover:border-accent-green/25 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {role.title} — {role.company}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{role.description}</p>
            </article>
          ))}
        </div>
        <p className="text-slate-400 leading-relaxed border-l-2 border-accent-green/40 pl-5">
          Across these roles, I have worked at the intersection of architecture, embedded execution, customer-driven development, and product innovation.
        </p>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";

type Role = {
  company: string;
  title: string;
  period: string;
  highlights: string[];
  link?: { label: string; url: string };
};

const ROLES: Role[] = [
  {
    company: "Motive Technologies",
    title: "Senior Software Engineer",
    period: "Oct 2024 – Present",
    highlights: [
      "Designed and developed features for Asset Gateway",
      "Contributed to Vehicle Gateway development",
      "Improved test coverage and reliability",
      "Reduced transmitted packet overhead",
      "Performed cost analysis showing monetary benefits of optimization work",
    ],
  },
  {
    company: "Pankhtech India Pvt. Ltd.",
    title: "Consultant",
    period: "Sep 2024 – Dec 2024",
    highlights: [
      "Led design and development of neurofeedback-based headphones with integrated neurostimulation",
      "Defined end-to-end hardware and firmware architecture",
      "Supported sensor integration, signal processing, low-power optimization, prototyping, and pilot validation",
      "Headphone Project / Sychedelic: Responsible for electronics hardware design, integration, firmware development, and solution innovation related to medical hardware safety for the headphone platform.",
    ],
    link: { label: "www.sychedelic.com", url: "https://www.sychedelic.com" },
  },
  {
    company: "STMicroelectronics",
    title: "Sr. Application Engineer",
    period: "Apr 2022 – Aug 2024",
    highlights: [
      "Reference design development for faster startup and customer go-to-market",
      "Hands-on product design support for customers",
      "Customer training and technical enablement across embedded platforms",
    ],
  },
  {
    company: "STMicroelectronics",
    title: "Application Engineer",
    period: "Jan 2020 – Mar 2022",
    highlights: [
      "Application and middleware development extending ST MCU/MPU/SoC capabilities",
      "Supported customers during product design and development phases",
    ],
  },
  {
    company: "Shellios Technolabs",
    title: "Senior Embedded Software Engineer",
    period: "2019",
    highlights: [
      "Led multidisciplinary team for end-to-end embedded system design",
      "Delivered embedded solutions for Shellios smart helmet product suite",
    ],
  },
  {
    company: "Consultant and Freelancer",
    title: "Smarttech3DP / Sennet Control GmbH",
    period: "2018",
    highlights: [
      "Product development consulting",
      "Firmware engineering",
      "IoT connectivity solutions for industrial and electronic products",
    ],
  },
  {
    company: "Intello Transpo Pvt. Ltd.",
    title: "Embedded Firmware Engineer",
    period: "2017",
    highlights: [
      "Designed a complete OTA bootloader using Quectel M95 GSM module",
      "Developed firmware for vehicle tracking / VTS project",
    ],
  },
  {
    company: "STMicroelectronics",
    title: "Embedded Trainee Engineer",
    period: "2016",
    highlights: [
      "Firmware development and demo application design",
      "Built NFC-based IR thermometer for body temperature measurement",
    ],
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
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Experience</h2>
        <p className="text-slate-400 mb-12">Impact-focused roles across semiconductors, startups, and product teams.</p>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-accent-green/30 space-y-12">
          {ROLES.map((role, i) => (
            <article
              key={`${role.company}-${role.period}`}
              className="relative"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span
                className="absolute left-0 -translate-x-[29px] sm:-translate-x-[33px] top-1.5 w-3 h-3 rounded-full bg-accent-green shadow-lg shadow-accent-green/40"
                aria-hidden="true"
              />
              <div className="bg-surface-800/80 rounded-xl p-5 sm:p-6 border border-[var(--border)] hover:border-accent-green/25 transition-colors">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                  <h3 className="text-lg font-semibold text-white">
                    {role.company} — {role.title}
                  </h3>
                  <span className="text-sm text-slate-500 font-mono">{role.period}</span>
                </div>
                <ul className="space-y-2 text-slate-400 text-sm leading-relaxed">
                  {role.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-accent-green shrink-0">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                  {role.link && (
                    <li className="pt-1">
                      <a
                        href={role.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-green hover:underline text-sm"
                      >
                        {role.link.label}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

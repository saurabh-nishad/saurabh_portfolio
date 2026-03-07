"use client";

import { useEffect, useRef } from "react";

type Project = {
  title: string;
  summary: string;
  focus: string[];
  tech: string[];
  role: string;
  link?: string;
  linkLabel?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Neurofeedback + Neurostimulation Headphones",
    summary:
      "Led architecture and development of next-generation neurofeedback-based headphones. Responsible for electronics hardware design, firmware development, system integration, and medical hardware safety-oriented solution innovation.",
    focus: [
      "Sensor integration",
      "Neurostimulation",
      "Low-power design",
      "Prototype validation",
      "User experience",
      "Scalable product architecture",
    ],
    tech: ["Embedded C", "BLE", "Signal processing", "Medical safety"],
    role: "Lead architecture, hardware, firmware, system integration",
    link: "https://www.sychedelic.com",
    linkLabel: "Sychedelic",
  },
  {
    title: "VoiceEdge Command Detector",
    summary:
      "STM32H7 and ST MEMS microphone based voice recognition system with on-board inferencing using a Keras model. Full-stack contribution spanning firmware design and model training.",
    focus: ["On-device ML", "Voice recognition", "STM32H7"],
    tech: ["STM32H7", "MEMS mic", "Keras", "Embedded C"],
    role: "Firmware design, model training",
  },
  {
    title: "Smart Helmet Platform",
    summary:
      "Led development of a smart helmet series with air purification, Bluetooth integration, and AR experience. Contributed to schematic design and firmware development.",
    focus: ["Air purification", "Bluetooth", "AR"],
    tech: ["Embedded C", "BLE", "Schematic design"],
    role: "Lead development, schematic and firmware",
  },
  {
    title: "Industrial Air / Pressure Monitoring Device",
    summary:
      "Designed industrial pressure and air-quality monitoring device using TI Sitara processor and STM32. Built environmental data accumulation firmware on STM32 and developed QT-based UI manager for TI Sitara with cross-compilation workflow.",
    focus: ["Industrial IoT", "Environmental monitoring"],
    tech: ["TI Sitara", "STM32", "QT", "Cross-compilation"],
    role: "Hardware/firmware design, QT UI",
  },
  {
    title: "OTA Bootloader with GSM Connectivity",
    summary:
      "Built a production-oriented OTA bootloader using Quectel M95 GSM module. Delivered firmware for VTS / tracking platform.",
    focus: ["OTA", "GSM", "Fleet tracking"],
    tech: ["Quectel M95", "Embedded C", "VTS"],
    role: "Bootloader and firmware development",
  },
  {
    title: "NFC-based IR Thermometer",
    summary:
      "Designed IR thermometer system using NFC for body temperature measurement during trainee engineering role at STMicroelectronics.",
    focus: ["NFC", "IR sensor", "Medical-adjacent"],
    tech: ["NFC", "STM32", "IR sensor"],
    role: "Firmware and demo application design",
  },
  {
    title: "Gateway Optimization and Analytics at Motive",
    summary:
      "Asset Gateway and Vehicle Gateway feature development with test coverage improvements, packet overhead reduction, and cost-benefit analysis delivering measurable optimization outcomes.",
    focus: ["Gateway", "Test coverage", "Cost optimization"],
    tech: ["C/C++", "Gateway firmware", "Analytics"],
    role: "Feature development, optimization, cost analysis",
  },
];

export default function Projects() {
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
      id="projects"
      ref={ref}
      className="section-reveal py-20 px-4 sm:px-6 border-t border-[var(--border)]"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Featured Projects</h2>
        <p className="text-slate-400 mb-12">
          Selected work in Embedded Systems, IoT, Medical-Adjacent Electronics, and Industrial
          Platforms.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="bg-surface-800/80 rounded-xl p-6 border border-[var(--border)] hover:border-accent-green/25 transition-colors flex flex-col"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-lg font-semibold text-white leading-tight">{project.title}</h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-green text-sm hover:underline shrink-0"
                  >
                    {project.linkLabel}
                  </a>
                )}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.summary}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.focus.map((f) => (
                  <span
                    key={f}
                    className="px-2 py-0.5 rounded text-xs bg-accent-green/10 text-accent-green border border-accent-green/20"
                  >
                    {f}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-xs bg-surface-600 text-slate-400">
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-slate-500 text-xs font-mono">{project.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

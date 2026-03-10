"use client";

import { useEffect, useRef } from "react";

type Project = {
  title: string;
  positioning: string;
  whatIBuilt: string[];
  whyHard: string;
  whyMatters: string;
  link?: string;
  linkLabel?: string;
};

const PROJECTS: Project[] = [
  {
    title: "NeuroBoost Headphones — Neurofeedback + Stimulation Wearable",
    positioning:
      "A next-generation neurotechnology headphone platform designed to combine brain-signal interaction, embedded intelligence, stimulation capability, and premium wearable product thinking.",
    whatIBuilt: [
      "Contributed to product direction and technical architecture for a neurofeedback-based headphone system",
      "Worked across hardware selection, embedded system planning, and overall integration thinking",
      "Evaluated sensing, stimulation, audio-path, and embedded control architecture for product viability",
      "Helped shape a wearable platform intended to bridge consumer experience and deep-tech capability",
    ],
    whyHard:
      "This category sits at the intersection of bioelectronics, embedded systems, form factor constraints, low power, signal quality, user comfort, and safety-oriented design decisions.",
    whyMatters:
      "This project demonstrates the ability to build in one of the most difficult product categories: human-centered deep-tech wearables with hardware, firmware, sensing, and productization complexity.",
    link: "https://www.sychedelic.com",
    linkLabel: "Sychedelic",
  },
  {
    title: "BCI Headwear — EEG Sensing + Auditory Neurofeedback Platform",
    positioning:
      "A wearable headgear concept for enhancing focus and productivity through EEG sensing and neurofeedback interaction.",
    whatIBuilt: [
      "Worked on EEG sensing integration and electrode strategy",
      "Explored stimulation and sensing placement for practical wearable implementation",
      "Helped shape an MVP pathway for a product that combines neuroscience-inspired interaction with embedded hardware",
      "Contributed to architectural thinking around biosignal acquisition and user experience",
    ],
    whyHard:
      "Reliable biosignal acquisition in a wearable product is difficult due to motion artifacts, electrode placement, analog front-end sensitivity, comfort constraints, and signal-processing demands.",
    whyMatters:
      "This project highlights strengths in biosensing wearables, medical-adjacent embedded design, and early-stage product architecture for emerging deep-tech products.",
  },
  {
    title: "Smart Helmet — AI Voice Trigger and Connected Safety Platform",
    positioning:
      "A smart wearable safety system integrating embedded processing, connectivity, and voice-triggered intelligence.",
    whatIBuilt: [
      "Developed an AI-voice-trigger-based concept for smart helmet interaction",
      "Worked on embedded system architecture and connected-device thinking",
      "Explored how sensing, connectivity, and contextual control could be integrated into a field-usable wearable system",
    ],
    whyHard:
      "Wearable safety products require balancing environmental robustness, user interaction quality, low-power behavior, edge intelligence, and dependable real-world performance.",
    whyMatters:
      "This reflects capability in human-device interaction, edge intelligence, wearable product thinking, and connected embedded systems.",
  },
  {
    title: "Connected Asset Tracking & Mobility Systems",
    positioning:
      "Battery-operated tracking and telemetry systems combining location awareness, dead reckoning, cloud messaging, power-conscious design, and sensor-rich embedded architecture.",
    whatIBuilt: [
      "Designed system concepts involving STM32-class MCUs, GSM/GPS modules, IMU integration, battery-aware architecture, and flash storage planning",
      "Worked on platform-level thinking around MQTT communication, geofencing, location reporting, and edge intelligence",
      "Explored portable architecture choices to support future hardware upgrades and RTOS scalability",
    ],
    whyHard:
      "This class of product must solve for battery life, location accuracy, wireless reliability, field deployment constraints, and evolving hardware/network tradeoffs.",
    whyMatters:
      "Shows strength in connected hardware, telemetry systems, edge tracking products, and architecture designed for scalability and product evolution.",
  },
  {
    title: "Smart Security Ecosystem — Door Lock, Door Sensor, Central Alarm",
    positioning:
      "A modular smart security platform combining embedded control, access systems, wireless connectivity, cloud integration, mobile control, and low-power field operation.",
    whatIBuilt: [
      "Contributed to a modular firmware and product architecture spanning door locks, sensors, and central alarm systems",
      "Structured thinking across application, interface, and middleware layers for maintainability and portability",
      "Covered features such as BLE, Wi-Fi provisioning, MQTT/cloud integration, access control, tamper alerts, battery services, and voice assistant integration",
    ],
    whyHard:
      "Multi-device ecosystems are complex because they require consistent architecture, interoperability, secure communication, power optimization, field reliability, and user-facing simplicity.",
    whyMatters:
      "Demonstrates capability in system-level platform design, connected ecosystem thinking, and scalable architecture for smart products.",
  },
  {
    title: "Embedded Audio & Intelligent Headphone Platform",
    positioning:
      "A sophisticated headphone product direction involving USB audio, codec/DSP evaluation, ANC-related architecture, stimulation concepts, and next-generation audio-system integration.",
    whatIBuilt: [
      "Evaluated audio-codec and DSP options for advanced headphone architecture",
      "Explored system design involving STM32U5, audio codecs, DSP, amplifiers, microphones, and premium feature integration",
      "Investigated implementation paths for Dolby-oriented audio features and ANC-capable design considerations",
    ],
    whyHard:
      "Audio products become significantly more difficult when they also involve signal processing, premium listening experience, power constraints, sensor integration, and advanced embedded audio pipelines.",
    whyMatters:
      "Highlights cross-functional capability in audio electronics, DSP-oriented product architecture, premium wearable design, and consumer deep-tech innovation.",
  },
  {
    title: "Industrial / Field Optimization Projects",
    positioning:
      "A range of embedded and field-focused efforts involving firmware optimization, BLE throughput, OTA architecture, mesh connectivity, diagnostic workflows, and remote-debug infrastructure.",
    whatIBuilt: [
      "Worked on BLE data streaming systems with high-throughput packet handling",
      "Built and refined non-blocking state-machine-driven embedded control logic",
      "Designed current-control, calibration, ramp-control, and feedback mechanisms for precise hardware behavior",
      "Explored remote debugging setups and robust architecture for field-facing products",
      "Improved modularity, testability, and deployment readiness across embedded projects",
    ],
    whyHard:
      "These projects demanded consistent handling of timing, memory, reliability, throughput, diagnostics, real-world deployment constraints, and maintainable architecture.",
    whyMatters:
      "This work reflects practical strength in engineering execution, system optimization, debugging, reliability, and scalable embedded architecture.",
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
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Flagship Projects</h2>
        <p className="text-slate-400 mb-12 max-w-2xl">
          Here are selected programs and systems that reflect the way I work: high technical depth, product-first thinking, and strong execution across the stack.
        </p>
        <div className="space-y-10">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="bg-surface-800/80 rounded-xl p-6 sm:p-8 border border-[var(--border)] hover:border-accent-green/25 transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
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
              <p className="text-slate-400 text-sm leading-relaxed mb-5 italic">{project.positioning}</p>
              <p className="text-accent-green text-xs font-semibold uppercase tracking-wider mb-2">What I Built</p>
              <ul className="space-y-1.5 mb-5 text-slate-400 text-sm">
                {project.whatIBuilt.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-accent-green shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Why It Was Hard</p>
              <p className="text-slate-400 text-sm mb-4">{project.whyHard}</p>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Why It Matters</p>
              <p className="text-slate-400 text-sm">{project.whyMatters}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

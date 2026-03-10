"use client";

import { useEffect, useRef } from "react";

const CLUSTERS = [
  {
    title: "Embedded & Firmware Systems",
    items:
      "STM32, nRF, ESP32, Zephyr, RTOS, embedded C/C++, bootloaders, OTA, low-power design, driver development, board bring-up, DMA/UART/SPI/I2C, FSM architecture",
  },
  {
    title: "Connectivity & Cloud Integration",
    items:
      "BLE, Wi-Fi, LoRa, GSM/GPS, MQTT, cloud-connected devices, wireless telemetry, provisioning systems, remote diagnostics, edge-to-cloud data flow",
  },
  {
    title: "Electronics & Product Architecture",
    items:
      "System design, hardware-firmware partitioning, analog/digital integration, sensor architecture, power-aware product planning, validation strategy, manufacturability-oriented thinking",
  },
  {
    title: "Human-Centered Deep Tech",
    items:
      "Neurotech, biosignal acquisition, wearable systems, audio products, sensing interfaces, stimulation-enabled concepts, user-device interaction design",
  },
  {
    title: "Product & Leadership Value",
    items:
      "Architecture reviews, MVP strategy, technical due diligence, project rescue, modular system design, roadmap planning, cross-functional technical leadership",
  },
];

export default function Skills() {
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
      id="skills"
      ref={ref}
      className="section-reveal py-20 px-4 sm:px-6 border-t border-[var(--border)]"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Capabilities</h2>
        <p className="text-slate-400 mb-12">
          Technical and leadership capabilities across embedded systems, connectivity, and product architecture.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CLUSTERS.map((cluster) => (
            <div
              key={cluster.title}
              className="bg-surface-800/80 rounded-xl p-5 border border-[var(--border)] hover:border-accent-green/25 transition-colors"
            >
              <h3 className="text-sm font-semibold text-accent-green mb-3 uppercase tracking-wider">
                {cluster.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{cluster.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

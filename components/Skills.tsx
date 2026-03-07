"use client";

import { useEffect, useRef } from "react";

const SKILL_GROUPS = [
  {
    title: "Programming",
    items: ["Embedded C", "C++", "Python", "Bash", "C# (basic/intermediate)"],
  },
  {
    title: "Microcontrollers / Processors",
    items: [
      "STM32 Cortex-M / Cortex-A",
      "STM8",
      "Qualcomm Snapdragon 820",
      "AVR",
      "ESP32 / ESP8266",
      "8051",
    ],
  },
  {
    title: "Peripherals / Interfaces",
    items: ["I2S, SAI, DFSDM", "SPI, I2C, UART, DMA, CAN", "USB", "RGB, ART, LTDC", "Ethernet"],
  },
  {
    title: "Middleware / Connectivity",
    items: [
      "BLE / Bluetooth",
      "Wi-Fi",
      "LwIP",
      "LoRaWAN",
      "USB Stack",
      "FatFS",
      "MQTT",
      "CoAP",
      "AWS IoT Core / Greengrass / EC2 / Lambda",
    ],
  },
  {
    title: "Operating Systems",
    items: ["FreeRTOS", "Azure RTOS", "Buildroot", "Zephyr", "Linux", "Windows"],
  },
  {
    title: "Tools",
    items: [
      "STM32CubeIDE",
      "EWARM",
      "Keil",
      "VS Code",
      "Android Studio",
      "QT",
      "Git",
      "SVN",
      "Jira",
      "Doxygen",
      "Confluence",
      "KiCad",
      "Altium",
      "Oscilloscopes",
      "Node-Red",
    ],
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
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Skills & Tech Stack</h2>
        <p className="text-slate-400 mb-12">Technologies and tools across embedded, connectivity, and product development.</p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="bg-surface-800/80 rounded-xl p-5 border border-[var(--border)]"
            >
              <h3 className="text-sm font-semibold text-accent-green mb-4 uppercase tracking-wider">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-md text-sm bg-surface-600/80 text-slate-300 border border-[var(--border)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

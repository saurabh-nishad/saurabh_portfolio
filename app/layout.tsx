import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

const SITE_URL = "https://saurabh-nishad.github.io/saurabh_portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Saurabh Nishad | Embedded Systems Expert | IoT & STM32 Expert | Product Development Support",
  description:
    "Saurabh Nishad — Embedded systems expert, IoT expert, STM32 expert & technical expert. Product development support, firmware, hardware design, neurotech & connected devices. 9+ years semiconductor, startups, product teams.",
  keywords: [
    "Saurabh Nishad",
    "embedded systems expert",
    "embedded expert",
    "IoT expert",
    "IoT specialist",
    "STM32 expert",
    "STM32 developer",
    "technical expert",
    "product development support",
    "product development consultant",
    "embedded systems engineer",
    "firmware expert",
    "hardware design expert",
    "deep-tech product architect",
    "embedded systems leader",
    "neurotechnology",
    "wearables",
    "connected devices",
    "edge intelligence",
    "embedded Linux",
    "Zephyr RTOS",
    "BLE",
    "Wi-Fi",
    "telematics",
    "gateway development",
    "embedded C",
    "embedded firmware",
  ],
  authors: [{ name: "Saurabh Nishad", url: "https://github.com/saurabh-nishad" }],
  creator: "Saurabh Nishad",
  openGraph: {
    title: "Saurabh Nishad | Embedded & IoT Expert | STM32 & Product Development Support",
    description:
      "Saurabh Nishad: Embedded systems expert, IoT expert, STM32 expert. Technical expert & product development support for firmware, hardware, neurotech, connected devices.",
    type: "website",
    url: "/",
    siteName: "Saurabh Nishad — Embedded & IoT Expert",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurabh Nishad | Embedded & IoT Expert | STM32 & Product Development Support",
    description:
      "Embedded systems expert, IoT expert, STM32 expert. Technical expert & product development support. Saurabh Nishad portfolio.",
  },
  robots: "index, follow",
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}#person`,
    name: "Saurabh Nishad",
    alternateName: "Saurabh Nishad Embedded Expert",
    jobTitle: "Embedded Systems Expert | IoT Expert | STM32 Expert | Technical Expert | Product Development Support",
    description:
      "Saurabh Nishad is an embedded systems expert, IoT expert, and STM32 expert offering product development support. Technical expert in firmware, hardware design, neurotechnology, wearables, and connected devices with 9+ years in semiconductors, startups, and product teams.",
    url: SITE_URL,
    sameAs: [
      "https://www.linkedin.com/in/saurabh-nishad",
      "https://github.com/saurabh-nishad",
    ],
    knowsAbout: [
      "Embedded Systems",
      "Embedded Firmware",
      "Embedded Linux",
      "IoT",
      "Internet of Things",
      "STM32",
      "STM32 Microcontrollers",
      "Product Development",
      "Product Development Support",
      "Technical Leadership",
      "Neurotechnology",
      "Wearables",
      "Connected Devices",
      "Edge Intelligence",
      "Firmware Development",
      "Hardware Design",
      "BLE",
      "Wi-Fi",
      "Telematics",
      "Gateway Development",
      "Zephyr RTOS",
      "Real-Time Operating Systems",
    ],
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "professional certification", "name": "IEEE Publication" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "patent", "name": "Patent-backed innovation" },
    ],
    skill: [
      "Embedded C/C++",
      "STM32",
      "IoT",
      "Firmware",
      "Hardware Design",
      "Product Development",
      "BLE",
      "Wi-Fi",
      "Embedded Linux",
      "Zephyr RTOS",
      "Telematics",
      "Gateway Development",
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Saurabh Nishad | Embedded Systems Expert | IoT & STM32 Expert | Product Development Support",
    description:
      "Portfolio of Saurabh Nishad — embedded systems expert, IoT expert, STM32 expert, technical expert. Product development support, firmware, hardware, neurotech, connected devices.",
    url: SITE_URL,
    mainEntity: { "@id": `${SITE_URL}#person` },
    keywords: "Saurabh Nishad, embedded systems expert, IoT expert, STM32 expert, technical expert, product development support, embedded, firmware, hardware design",
  };

  return (
    <html lang="en">
      <body className="font-sans min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
        />
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}

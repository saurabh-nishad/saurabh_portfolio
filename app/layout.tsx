import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

const SITE_URL = "https://saurabh-nishad.github.io/saurabh_portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Saurabh Nishad — Embedded Architect | IoT Product Developer | Hardware & Firmware Innovation",
  description:
    "Saurabh Nishad: Embedded Architect and IoT Product Developer. Portfolio showcasing hardware design, firmware, gateways, industrial systems, neurotechnology, STM32, and product innovation.",
  keywords: [
    "Saurabh Nishad",
    "Embedded Systems Engineer",
    "Embedded Architect",
    "IoT Product Developer",
    "Firmware Engineer",
    "Hardware Design Engineer",
    "STM32 Developer",
    "Embedded Linux",
    "Zephyr RTOS",
    "Neurotechnology Headphones",
    "Medical Electronics Innovation",
    "Product Development Consultant",
  ],
  authors: [{ name: "Saurabh Nishad", url: "https://github.com/saurabh-nishad" }],
  creator: "Saurabh Nishad",
  openGraph: {
    title: "Saurabh Nishad — Embedded Architect | IoT Product Developer",
    description:
      "Saurabh Nishad: Hardware design, firmware, gateways, industrial systems, neurotechnology, STM32, cloud connectivity, and product innovation.",
    type: "website",
    url: "/",
    siteName: "Saurabh Nishad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurabh Nishad — Embedded Architect | IoT Product Developer",
    description: "Saurabh Nishad: Hardware, firmware, IoT, and product innovation.",
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
    name: "Saurabh Nishad",
    jobTitle: "Embedded Architect | IoT Product Developer",
    description:
      "Embedded Architect and IoT Product Developer specializing in hardware design, firmware, gateways, industrial systems, neurotechnology, STM32, and product innovation.",
    url: SITE_URL,
    sameAs: [
      "https://www.linkedin.com/in/saurabh-nishad",
      "https://github.com/saurabh-nishad",
    ],
    knowsAbout: [
      "Embedded Systems",
      "IoT",
      "Firmware",
      "Hardware Design",
      "STM32",
      "Embedded Linux",
      "Zephyr RTOS",
    ],
  };

  return (
    <html lang="en">
      <body className="font-sans min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}

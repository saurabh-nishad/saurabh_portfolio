import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saurabh Nishad — Embedded Architect | IoT Product Developer | Hardware & Firmware Innovation",
  description:
    "Portfolio of Saurabh Nishad: Embedded Architect and IoT Product Developer specializing in hardware design, firmware, gateways, industrial systems, neurotechnology headphones, STM32, cloud connectivity, and product innovation.",
  keywords: [
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
  openGraph: {
    title: "Saurabh Nishad — Embedded Architect | IoT Product Developer",
    description:
      "Hardware design, firmware, gateways, industrial systems, neurotechnology, STM32, cloud connectivity, and product innovation.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurabh Nishad — Embedded Architect | IoT Product Developer",
    description: "Hardware, firmware, IoT, and product innovation.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans min-h-screen">
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}

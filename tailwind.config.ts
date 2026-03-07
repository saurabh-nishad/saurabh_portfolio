import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          green: "#22c55e",
          blue: "#3b82f6",
          glow: "rgba(34, 197, 94, 0.4)",
          glowBlue: "rgba(59, 130, 246, 0.3)",
        },
        surface: {
          900: "#0a0f0d",
          800: "#111a16",
          700: "#1a2520",
          600: "#24302a",
        },
      },
      fontFamily: {
        sans: ["system-ui", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["ui-monospace", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, rgba(34,197,94,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,197,94,0.03) 1px, transparent 1px)",
        "glow-radial": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34,197,94,0.15), transparent)",
      },
    },
  },
  plugins: [],
};

export default config;

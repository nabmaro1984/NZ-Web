import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nz: {
          bg: "#0a0f1e",
          "bg-2": "#111827",
          "bg-3": "#1a2235",
          primary: "#0891b2",
          cyan: "#22d3ee",
          green: "#10b981",
          amber: "#f59e0b",
          purple: "#8b5cf6",
          text: "#f1f5f9",
          muted: "#94a3b8",
        },
        morocco: {
          terracotta: "#C85346",
          emerald: "#2A9D8F",
          sapphire: "#264653",
          gold: "#E9C46A",
          amber: "#F4A261",
          navy: "#1A2744",
          tile: "#D4A547",
          "tile-blue": "#2C5F7E",
          "tile-green": "#2E7D6F",
          "tile-red": "#C85346",
          "bg-warm": "#1a1520",
        },
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glow-gradient":
          "linear-gradient(135deg, #0891b2 0%, #22d3ee 50%, #8b5cf6 100%)",
        "zellij-pattern": "url('/images/zellij-pattern.svg')",
        "zellij-border": "url('/images/zellij-border.svg')",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "glow-slow": "glow 4s ease-in-out infinite alternate",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-down": "slideDown 0.3s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "counter": "counter 2s ease-out forwards",
        "gradient-shift": "gradientShift 8s ease infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "zellij-rotate": "zellijRotate 20s linear infinite",
        "mosaic-shimmer": "mosaicShimmer 4s ease-in-out infinite",
        "arch-appear": "archAppear 0.8s ease-out forwards",
        "geometric-spin": "geometricSpin 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(8, 145, 178, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(34, 211, 238, 0.6)" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        zellijRotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        mosaicShimmer: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.6" },
        },
        archAppear: {
          "0%": { opacity: "0", transform: "scaleX(0.5)" },
          "100%": { opacity: "1", transform: "scaleX(1)" },
        },
        geometricSpin: {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(1.05)" },
          "100%": { transform: "rotate(360deg) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

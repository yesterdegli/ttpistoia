import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "section-pattern",
    "section-pattern-light",
    "stat-enter-left",
    "stat-enter-right",
    "stat-enter-delay-0",
    "stat-enter-delay-1",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "var(--brand-blue)",
          light: "var(--brand-blue-light)",
        },
        red: {
          DEFAULT: "var(--brand-red)",
          deep: "var(--brand-red-deep)",
          text: "var(--brand-red-text)",
        },
        ink: {
          strong: "#22252a",
          body: "#33363b",
          mid: "#4a4d53",
          soft: "#5a5e65",
          muted: "#6b7078",
          dim: "#8a8f98",
          faint: "#a6abb3",
        },
        surface: {
          DEFAULT: "#ffffff",
          grey: "#f4f5f7",
          tint: "#f7f8fa",
          alt: "#fafbfc",
        },
        line: {
          DEFAULT: "#e6e8ec",
          control: "#dfe2e8",
          table: "#eceef1",
          grid: "#b8bfc8",
          frame: "#cfd4da",
        },
        state: {
          playoff: "#a6e3a1",
          relegated: "#f6a5a5",
          legend: "#eceef1",
        },
      },
      fontFamily: {
        display: ["var(--font-archivo)", "sans-serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      backgroundImage: {
        "grad-bg":
          "linear-gradient(115deg,var(--brand-blue) 0%,var(--brand-blue-light) 45%,var(--brand-red-deep) 82%,var(--brand-red) 100%)",
        "grad-hero":
          "linear-gradient(115deg,var(--brand-blue) 0%,var(--brand-blue-light) 42%,var(--brand-red-deep) 80%,var(--brand-red) 100%)",
        "grad-text":
          "linear-gradient(100deg,var(--brand-blue) 0%,var(--brand-blue-light) 45%,var(--brand-red-text) 88%,var(--brand-red) 100%)",
        "grad-hamburger":
          "linear-gradient(100deg,var(--brand-blue) 0%,var(--brand-red-text) 100%)",
        "footer-rule":
          "linear-gradient(90deg,var(--brand-red) 0 30%,rgba(255,255,255,.25) 30% 32%,transparent 32%)",
      },
      screens: {
        md: "641px",
        lg: "901px",
      },
      boxShadow: {
        header: "0 1px 6px rgba(0,0,0,.10)",
        drawer: "-10px 0 44px rgba(0,0,0,.20)",
      },
    },
  },
  plugins: [],
};

export default config;

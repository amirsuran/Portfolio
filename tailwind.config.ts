import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#38bdf8", // Light blue
        "primary-dark": "#0ea5e9", // Darker blue
        background: "#ffffff",
        "background-dark": "#0f172a", // Slate-900
        text: "#0f172a",
        "text-dark": "#e2e8f0", // Slate-200
        "text-muted": "#64748b", // Slate-500
        "text-muted-dark": "#94a3b8", // Slate-400
        border: "#e2e8f0",
        "border-dark": "#334155", // Slate-700
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
      },
    },
  },
  plugins: [],
};

export default config; 
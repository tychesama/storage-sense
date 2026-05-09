import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111413",
        paper: "#f5f1e8",
        bone: "#fffaf0",
        moss: "#3a5f4d",
        brass: "#b9822c",
        steel: "#d9e4df"
      },
      fontFamily: {
        sans: ["Inter", "Arial", "Helvetica", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;

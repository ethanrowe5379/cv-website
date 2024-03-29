import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/***/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/***/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/(templates)/home/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
};
export default config;

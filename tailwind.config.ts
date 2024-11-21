import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-manrope)"],
      },
      colors: {
        primary: "#FF4E88",
      },
    },
  },
  plugins: [],
};
export default config;

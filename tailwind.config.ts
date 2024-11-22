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
        grayDarkest: "#131316",
        grayDarker: "#212126",
        grayDark: "#9394a1",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
  darkMode: ["class"],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        circularLight: "repeating-radial-gradient(#ffffff , rgb(148 163 184) 5px, rgb(148 163 184) 100px);",
        circularDark: "repeating-radial-gradient(#ffffff , rgb(30 41 59) 5px, rgb(30 41 59) 100px);",
      },
    },
  },
  plugins: [],
};
export default config;

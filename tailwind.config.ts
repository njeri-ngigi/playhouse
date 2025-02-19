import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: "#FFFDF4",
        lemon: "#FFFB00",
        lime: "#00FF11",
        blood: "#D31C1B",
        gray: "#626262"
      },
      fontFamily: {
        kode: ['var(--font-kode_mono)'],
      }
    },
  },
  plugins: [],
} satisfies Config;

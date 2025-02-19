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
      },
      keyframes: {
        typewriter: {
          "0%": {
            opacity:"10",
            width: "0px",
            visibility: "hidden"
          },
          "100%": {
            opacity:"10",
            width: "250px"
          }  
        },
        username: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "10",
          },
        },
        fadeOut: {
          "0%": { opacity: '1' },
          "100%": { opacity: '0' },
        },
      },
      animation: {
        typewriter: "typewriter 2s steps(20)",
        username: "username 2s",
        "fade-out": "fadeOut 1s ease-in forwards",
      }
    },
  },
  plugins: [],
} satisfies Config;

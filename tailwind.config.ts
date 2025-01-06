import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }
        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }
        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      colors: {
        main: "rgba(var(--color-main), 1)",
        "color-1": "rgba(var(--color-1), 1)",
        "color-2": "rgba(var(--color-2), 1)",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        openSans: "var(--font-open-sans)",
        firaCode: "var(--font-fira-code)",
      },
    },
  },
  plugins: [],
} satisfies Config;

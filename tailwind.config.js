/** @type {import('tailwindcss').Config} */
import defaultConfig from "shadcn/ui/tailwind.config";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  ...defaultConfig,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...defaultConfig.theme,
    extend: {
      ...defaultConfig.theme.extend,
      colors: {
        ...defaultConfig.theme.extend.colors,
        primary: {
          ...defaultConfig.theme.extend.colors.primary,
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          900: "#1e3a8a",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        gradientShift: {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
      animation: {
        gradientShift: "gradientShift 10s ease infinite",
      },
    },
  },
  plugins: [...defaultConfig.plugins, tailwindcssAnimate],
};

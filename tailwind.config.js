/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        geist: ['Geist', 'sans-serif'],
        cabinet: ['Cabinet Grotesk', 'sans-serif'],
      },
      colors: {
        bodyPrimary: "#393939",
        bodyPrimaryLight: "#9C9C9C",
        navPriText: "#3B4347",
        navSecText: "#8F9BA0",
        borderBtn: "#007AAD",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundColor: {
        blueBtn: "#0093D0",
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar-hide')
  ],
};

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // <--- Este é crucial para o Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Se você ainda tiver alguma page na pasta 'pages'
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
  ],
  darkMode: "class", // <--- Mude de 'media' para 'class'
  theme: {
    extend: {
      fontFamily: {
        sedgwick: ["var(--font-sedgwick)", "cursive"],
        caveat: ["var(--font-caveat)", "cursive"],
        oswald: ["var(--font-oswald)", "sans-serif"],
        lexend: ["var(--font-lexend)", "sans-serif"],
      },
      screens: {
      },
    },
  },
  plugins: [],
};

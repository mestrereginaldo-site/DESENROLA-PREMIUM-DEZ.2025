/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#1E3A8A',
          gold: '#D4AF37',
        },
        background: '#F8FAFC',
        foreground: '#1F2937',
      },
    },
  },
  plugins: [],
}

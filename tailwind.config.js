/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#1e3a5f',
          'blue-dark': '#0f1f35',
          'blue-light': '#2d4a6f',
        },
        accent: {
          gold: '#d4af37',
          'gold-light': '#e5c158',
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(to bottom right, #dbeafe, #eff6ff, #2d4a6f)',
        'gradient-nurse': 'linear-gradient(to bottom right, #2d4a6f, #dbeafe, #1e3a5f)',
        'gradient-therapy': 'linear-gradient(to bottom right, #fef3c7, #d4af37, #fde68a)',
        'gradient-medication': 'linear-gradient(to bottom right, #d1fae5, #eff6ff, #2d4a6f)',
        'gradient-companion': 'linear-gradient(to bottom right, #fce7f3, #e5c158, #fef3c7)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

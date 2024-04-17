/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      animation: {
        dot: 'dot 9s linear infinite',
        line:'line 2s linear'
      },
      keyframes: {
        dot: {
          '0%': {
            transform: 'translateX(0)',
          },
          '50%': {
            transform: 'translateX(12.7rem)',
          },
          '100%': {
            transform: 'translateX(-1)',
          },
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

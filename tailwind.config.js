/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '540px',
      // => @media (min-width: 768px) { ... }

      'lg': '850px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1050px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1050px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
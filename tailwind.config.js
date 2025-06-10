/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bnb: {
          green: '#26b460',
          'green-light': '#7fbf7f',
          dark: '#291f38',
          light: '#fbfbfb',
          gray: '#8d9993',
          purple: '#7e7284',
          violet: '#68478d',
          'green-bg': '#c9e6da',
          'gray-alt': '#7e7f73',
          'gray-light': '#bcc2b4',
          'purple-light': '#beb4be'
          
        }
      },
      fontFamily: {
        sans: ['Work Sans', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}

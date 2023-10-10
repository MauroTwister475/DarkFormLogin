/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        main: {
          bg: '#0076D4',
        },
        deep: {
          bg: '#EDF2F7'
        },
        transparent_blue: {
          bg: '#323841a4',
        }
      }
    },
  },
  plugins: [],
}


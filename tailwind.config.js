/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      1: '.25rem',
      2: '.5rem',
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      13: '3.25rem',
      14: '3.5rem',
      15: '3.75rem',
      '16': '4rem',
    },
    extend: {
      gridTemplateColumns: {
        detachments: '0.5fr 0.5fr 2fr',
        stratagems: '0.6fr 4ex 1fr 1.75fr 1.25fr 1fr',
        units: '1fr 10ex 4fr'
      }
    },
  },
  plugins: [],
}


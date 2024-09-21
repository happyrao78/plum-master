/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"], // Include .jsx, .ts, and .tsx files
  theme: {
    extend: {
      backgroundImage: {
        'gradient-text': 'linear-gradient(90deg, #FF9FA8 0%, #FFCCA3 51%, #FEFAF3 100%)',
      }
    },
  },
  plugins: [],
}

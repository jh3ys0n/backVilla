/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'dancing-script': ['"Dancing Script"', 'cursive'],
        'tilt-Warp': ['"Tilt Warp"', 'cursive'],
        'shadow': ['Londrina Shadow', 'sans-serif'],
        'sans': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

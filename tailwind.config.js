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

        bowlby: ['"Bowlby One SC"', 'sans-serif'],
        londrina: ['"Londrina Shadow"', 'cursive'],
        rampart: ['"Rampart One"', 'sans-serif'],
        rubik: ['"Rubik Glitch Pop"', 'sans-serif'],
      },
    },
  },
  plugins: [

  ],
}

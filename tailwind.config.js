/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'text-gradient': 'linear-gradient(90deg, #F87516 0%, #5E11FF 100%)',
      },
      linearGradientColors: {
        'orange-purple': ['#F87516', '#5E11FF'],
      },
    },
  },
  plugins: [],
}
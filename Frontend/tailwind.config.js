/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        brush: "url('/src/assets/brush.png')",
      },
    },
  },
  plugins: [],
};

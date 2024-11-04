// tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  // tailwind.config.js
theme: {
  extend: {
    colors: {
      green: {
        600: '#16A34A', // Tailwind's default for green-600
      },
    },
  },
},
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
    colors: {
      "primary-blue": "#1E90FF",
      "second-red": "#FF6347",
    }
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ["light"],
  }
}


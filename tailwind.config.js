/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'primary': '#FF9F29',
      "secondary": "#FEEFE2",
      'light': '#FDEFE2',
      'white': '#FFFFFF',
      'black': '#000000',
      'custom-blue': '#1E429F',
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
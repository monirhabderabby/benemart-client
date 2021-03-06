/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'primary': '#F2994A',
      'light': '#FDEFE2',
      'white': '#FFFFFF',
      'black': '#000000',
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

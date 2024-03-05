/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors:{
        'neutralSliver': "#F5F7FA",
        'neutralDGrey': "#4D4D4D",
        'neutralPrimary': "#4CAF4F",
        'neutralGrey': "#717171",
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}


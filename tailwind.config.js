/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif']
      },
      colors: {
        'yellow-1': '#F7DF94',
        'gray-1': '#333',
        'gray-2': '#4F4F4F',
        'gray-3': '#828282'

      }
    }
  },
  plugins: []
}

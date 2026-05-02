/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}'
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light']
  }
};

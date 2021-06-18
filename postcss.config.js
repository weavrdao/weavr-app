const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const vhFix = require('postcss-100vh-fix')

module.exports = {
  plugins: [
    tailwindcss,
    vhFix,
    autoprefixer,
  ],
};
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    linearBorderGradients: {
      directions: { // defaults to these values
        't': 'to top',
        'tr': 'to top right',
        'r': 'to right',
        'br': 'to bottom right',
        'b': 'to bottom',
        'bl': 'to bottom left',
        'l': 'to left',
        'tl': 'to top left',
      },
      colors: { // defaults to {}
        'blue-white': ['#00A4FF', '#FFFFFF'],
        'blue-f-purple-3': ['#00A4FF', '#2E2C9B'],
      },
      background: {
        'f-purple-1':'#130248',
      },
      border: { // defaults to these values (optional)
        '1': '1px',
        '2': '2px',
        '4': '4px',
      },
    },
    extend: {},
  },
  variants: {
    linearBorderGradients: ['responsive', 'hover', 'dark'], // defaults to ['responsive']
    extend: {},
  },
  plugins: [
    require('tailwindcss-border-gradient-radius'),
  ],
}
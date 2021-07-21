const defaultTheme = require('tailwindcss/defaultTheme')
const frabricTheme = require('./src/styles/theme')

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
        'l2-light-purple-tree': [frabricTheme.Colors.bgLevel2Light, frabricTheme.Colors.purpleThree],
      },
      background: {
        
      },
      border: { // defaults to these values (optional)
        '1': '1px',
        '2': '2px',
        '4': '4px',
      },
    },
    colors: {
      ...defaultTheme.colors,
      
      'purple-black': frabricTheme.Colors.purpleBlack,

      'purple-one': frabricTheme.Colors.purpleOne,
      'purple-two': frabricTheme.Colors.purpleTwo,
      'purple-three': frabricTheme.Colors.purpleThree,

      'foam': frabricTheme.Colors.foam,

      'action-blue': frabricTheme.Colors.actionBlue,

      'level-1-light': frabricTheme.Colors.bgLevel1Light,
      'level-2-light': frabricTheme.Colors.bgLevel2Light,
      'level-2-dark': frabricTheme.Colors.bgLevel2Dark,

      'affirmative-green': frabricTheme.Colors.affirmativeGreen,
      'negative-red': frabricTheme.Colors.negativeRed,
    },
    fill: {
      'transparent': 'RGBA(0, 0, 0, 0.0)',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    fontSize: {
      ...defaultTheme.fontSize,
      hero: [
        '48px',
        {
            letterSpacing: '-0.02em;',
            lineHeight: '96px',
            fontWeight: 700
        }
      ],
      h1: [
        '36px',
        {
            letterSpacing: '-0.02em;',
            lineHeight: '36px',
            fontWeight: 700
        }
      ],
      h2: [
        '30px',
        {
            letterSpacing: '-0.01em;',
            lineHeight: '36px',
            fontWeight: 700
        }
      ],
      h3: [
        '28px',
        {
            letterSpacing: '-0.01em;',
            lineHeight: '30px',
            fontWeight: 700
        }
      ],
      h4: [
        '24px',
        {
            letterSpacing: '-0.01em;',
            lineHeight: '28px',
            fontWeight: 700
        }
      ],
      h5: [
        '24px',
        {
            letterSpacing: '-0.01em;',
            lineHeight: '28px',
            fontWeight: 500
        }
      ],
      body: [
        '18px',
        {
            letterSpacing: '-0.01em;',
            lineHeight: '26px'
        }
      ],
      caption: [
        '16px',
        {
            lineHeight: '24px'
        }
      ],
      caption2: [
        '14px',
        {
            lineHeight: '20px'
        }
      ]
    },
    extend: {
      backgroundImage: theme => ({
        ...defaultTheme.backgroundImage,
      }),
      fontFamily: {
        sans: ['Work Sans', ...defaultTheme.fontFamily.sans]
      },
      borderRadius: {
        ...defaultTheme.borderRadius,
        none: '0',
        px: '1px',
        sm: '0.313rem',
        DEFAULT: '0.625rem'
      },
      textColor: {
        ...defaultTheme.textColor,
      },
      backgroundColor: {
        ...defaultTheme.backgroundColor,
      },
      boxShadow: {
        ...defaultTheme.boxShadow,
      },
      dropShadow: {
        ...defaultTheme.boxShadow,
      },
      ringWidth: {
        ...defaultTheme.ringWidth,
        DEFAULT: '1px'
      },
      padding: {
        ...defaultTheme.padding,
        px: '1px',
        '4px': '4px'
      },
      outline: {
        ...defaultTheme.outline,
      },
    },
  },
  variants: {
    linearBorderGradients: ['responsive', 'hover', 'dark'], // defaults to ['responsive']
    extend: {},
  },
  plugins: [
    require('tailwindcss-border-gradient-radius'),
    require('tailwindcss-textshadow'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
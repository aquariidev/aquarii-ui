const font = 'Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji';

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  theme: {
    extend: {},
    fontFamily: {
        'sans': font
    },
    minHeight: {
        '5': '5vh',
        '95': '95vh',
        'screen': '100vh',
        'full': '100%',
        '0': '0'
    },
    backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#408bd3',
        'default': theme('colors.gray.200'),
    }),
    borderColor: theme => ({
        ...theme('colors'),
        'default': theme('colors.gray.200'),
        'primary': '#408bd3',
    }),
    textColor: theme => ({
        ...theme('colors'),
        'link': '#3289f7'
    }),
    container: {
        center: true,
        padding: '1rem'
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],

  // purgecss
  purge: [
    './src/**/*.js',
    './src/**/*.vue',
  ]
}

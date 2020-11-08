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
    }),
    borderColor: theme => ({
      ...theme('colors'),
    }),
    textColor: theme => ({
      ...theme('colors'),
    }),
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
}

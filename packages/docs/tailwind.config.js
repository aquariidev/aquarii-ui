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
    borderRadius: {
        'none': '0',
        'sm': '.125rem',
        'default': '.25rem',
        'md': '0.375rem',
        'lg': '.5rem',
        'xl': '1rem',
        'full': '9999px',
        'large': '12px',
    },
    backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#3289f7',
        'default': '#eff5fb',
    }),
    borderColor: theme => ({
        ...theme('colors'),
        'default': theme('colors.gray.300'),
        'primary': '#3289f7',
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
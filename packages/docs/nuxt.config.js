const path = require('path');

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'aquarii-docs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'}
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  //If we face that we need all components directory to be global by default, we may change this only ~/components dir
  components: [
    '~/components',
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxt/typescript-build',

    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    [path.resolve('../ui/nuxt'), {global: true}]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-dark.css'
      }
    },
    liveEdit: false
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config) {
      // Fix multiple instances of vue from aquarii module.
      config.resolve.alias.vue$ = path.resolve(
        __dirname, './node_modules/vue/dist/vue.esm.js'
      )
    }
  },
  // Vue Router
  router: {
    linkActiveClass:'active',
  }
}

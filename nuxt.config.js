
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',

  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',

  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Global CSS
  */
  css: [
    'normalize.css',
    './assets/scss/global-styles.scss',
  ],
  styleResources: {
    scss: ['./assets/scss/global-variables.scss'],
    less: [],
    stylus: []
  },
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '@/plugins/vuesax',
  ],

  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://http.nuxtjs.org
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: "http://localhost:3001/api"
  },
  /*
  ** Server Middleware
  */
  serverMiddleware: {
    '/api': '~/api'
  },

  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: { url: '/auth/login', method: 'post', propertyName: 'token' },
  //         logout: { url: '/api/auth/logout', method: 'post' },
  //         user: { url: '/sessions/user', method: 'get', propertyName: 'user' }
  //       },
  //       // tokenRequired: true,
  //       // tokenType: 'bearer',
  //       // globalToken: true,
  //       // autoFetchUser: true
  //     }
  //   }
  // },

  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}

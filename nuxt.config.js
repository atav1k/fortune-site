module.exports = {
  /* Site css */
  css: [
    { src: '~/src/fortune.css' },
    { src: '~/assets/app.css' }
  ],

  /* Headers of the page */
  head: {
    title: 'fortune-site',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Fortune' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/fortune-css/dist/fortune.min.css' }
    ]
  },
  /* Customize the progress bar color */
  loading: { color: 'var(--state-primary)' },

  plugins: [
    { src: '~/plugins/vue-scrollactive' }
  ],

  /* Build configuration*/
  build: {
    postcss: {
      plugins: {
      'postcss-cssnext': {
        features: {
          rem: false,
          customProperties: false
          }
        }
      }
    },

    /* Run ESLint on save */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

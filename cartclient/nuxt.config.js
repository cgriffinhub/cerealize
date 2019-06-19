import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script: [
      { src: 'https://js.stripe.com/v3/' },
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js' },

      
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  css: [
    '~assets/css/bulma.css',
    '~assets/scss/core.scss',
    '~assets/css/core.css',
    //'~assets/styles/app.scss',
     '~assets/styles/app.css'
],

  loading: { color: '#fff' },

  plugins: [],

  modules: [
    '@nuxtjs/axios', 
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    'vue-sweetalert2/nuxt',
    [
      'nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         }
       ]
      }
]
  ],
  axios: {
    baseURL: 'http://homestead.cart/api'
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/login',
            method: 'post',
            propertyName: 'meta.token'
          },
          user: {
            url: 'auth/me',
            method: 'get',
            propertyName: 'data'
          }
        }        
      }
    }
  },

  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      },
      preset: {
        features: {
          customProperties: false
        }
      }
    },

    //extend(config, ctx) {
      // Run ESLint on save
      /*
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      */
    //}
  }
}

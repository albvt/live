import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:'stylesheet', href:'https://fonts.googleapis.com/css?family=Mansalva|Open+Sans+Condensed:300&display=swap'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#3b8070",throttle: 0 },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/main.css',
    '~/assets/styles.css',
  ],
  /*nuxt generate config*/
  
  generate: {
  routes: function () {
    return axios.get('http://albvt.pythonanywhere.com/audio/')
      .then((res) => {
        return res.data.map((audio) => {
          return '/audio/' + audio.id
        })
      })
  }
},
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      {src: '~/plugins/vueTyper.js', ssr: false},
    {src: '~/plugins/vueparticles.js', ssr: false},
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
 module.exports = {
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    // proxyHeaders: false
  }
},
  //auth: {
  // Options
//},
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

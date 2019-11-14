import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: 'mansaah ' ,
    title:  'mansaah',
    meta: [
      { charset: 'utf-8' },
      { name: 'theme-color' , content: '#0E2F44' },
      {name:'google-signin-client_id' , content: '226827588337-a9eh80rrldicns0dakkl755okud8jfqd.apps.googleusercontent.com' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      {name:'google-site-verification',content:'oAzC1OHtW4HnIpGtv9G_luiGCGfP681gbhbxZD36wgQ'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:'stylesheet', href:'https://fonts.googleapis.com/css?family=Alegreya|Montserrat|Yeon+Sung&display=swap'}
    ],
    script: [
      { src: 'https://apis.google.com/js/platform.js' }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#3b8070",throttle: 0 },
  
  generate: {
routes: function () {
return [
'/audio/1',
'/audio/2',
'/audio/3',
 '/audio/4',
'/audio/5',
'/audio/6',
 '/audio/7',
'/audio/8',
'/audio/9',
'/audio/10',
'/audio/11',
'/audio/12',
  '/article/1',
  '/article/2',
  '/article/3',
  
];
}
},
  /*
  ** Global CSS
  */
  css: [
    '~/assets/main.css',
    '~/assets/styles.css',
    'vue-plyr/dist/vue-plyr.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [

      {src: '~/plugins/vueTyper.js', ssr: false},
      {src: '~/plugins/vue-particles.js',ssr:false},
      {src:'~/plugins/vue-plyr.js',ssr:false},
       { src: "~/plugins/aos", ssr: false },
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
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
     ['@nuxtjs/google-adsense', {
      id: 'ca-pub-5388314784840597'
    }],
    '@nuxtjs/sitemap',
    
  ],
  
  sitemap: {
    hostname: 'https://mansaah.com/',
    lastmod: '2019-11-13',
    sitemaps: [
      {
        path: '/sitemap.xml',
        routes: [
          'audio',
          'search',
          'audio/1',
          'audio/2',
          'audio/3',
          'audio/4',
          'audio/5',
          'audio/6',
          'audio/7',
          'audio/8',
          'audio/9',
          'audio/10',
          'audio/11',
          'audio/12',
          
          
        ],
        gzip: true
      },
    ]
  },
  
  

  auth: {
  // Options
},
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


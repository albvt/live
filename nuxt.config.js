import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'theme-color' , content: '#61873b' },
      { name: 'msapplication-navbutton-color' , content: '#61873b' },
      { name: 'apple-mobile-web-app-capable' , content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style'  , content: '#61873b' },
      {name: 'monetization' , content:'$ilp.uphold.com/KeZqRj2YkFGf'},

      {name:'google-signin-client_id' , content: '458126264490-7cakna6471hf9s9gdij499cugn142eje.apps.googleusercontent.com' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Discover the magic of African Music at Blast, a community powered entertainment Rootsman vibe. Lift your spirits with hard beats mixtapes and audios, trending music, create playlists, inspiring podcasts, viral  African albums, and so much more!!!!' },
      { hid: 'description', name: 'keywords', content: 'back to sleep, music, podcasts, afro-pop typebeats, African Mixtapes, music upload, audio direct sales, lol, humor, buy with bitcoin, comment, share, blast, mansaah.com, playlists' },
      {name:'google-site-verification',content:'oAzC1OHtW4HnIpGtv9G_luiGCGfP681gbhbxZD36wgQ'},
      { property:'og:locale' , content:'af-ZA' },
      { property:'og:type' ,content:'website' },
      { property:'og:title' ,content:'Blast : African Music,Afro live Podcasts, Mixtapes and Type Beats!' },
      { property: 'og:description' ,content:'buy digital African Art with bitcoin,African landscape,African gifs,and rootsman pics' },
      { property:'og:site_name' ,content:'blast' },
      { property:'og:url' ,content: 'https://albvt.netlify.app/'},
      {name:'twitter:card' ,content: 'summary'},
      {name:'twitter:description', content:'Discover the magic of African Music at Mansaah, a community powered entertainment Rootsman vibe. Lift your spirits with hard beats mixtapes and audios, trending music, create playlists, inspiring podcasts, viral  African albums, and so much more!!!!'},
      { name:'twitter:creator' ,content: '@mansaah_sound'},
      {name: 'twitter:site', content: '@mansaah'},
      { name:'twitter:title', content:''},
      { name:'twitter:image', content:''},
    ],
    link: [
      
      {rel: 'canonical',href:'https://albvt.netlify.app'},
      {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&family=Dosis:wght@200;300&display=swap'}
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
     { src: '~plugins/ga.js', mode: 'client' }
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
    //'@nuxtjs/onesignal',
    '@nuxtjs/pwa',

     ['@nuxtjs/google-adsense', {
      id: 'ca-pub-5388314784840597'
    }],
    '@nuxtjs/sitemap',
     '@nuxtjs/firebase'
    
  ],
 
    firebase: {
// options

config: {
        apiKey: 'AIzaSyD5id1rzfvcDzwEj2zESWLWaIAoSPJE7cs',
        authDomain: 'mansaah-sound.firebaseapp.com',
        databaseURL: 'https://mansaah-sound.firebaseio.com',
        projectId: 'mansaah-sound',
        storageBucket: 'mansaah-sound.appspot.com',
        messagingSenderId: '458126264490',
        appId: '1:458126264490:web:f6f911d7f5f70a5e9f28d3',
        measurementId: 'G-4D33HZ8RBC'
      },
services: {
        auth: true ,
        messaging: true,
        performance: true,
        analytics: true// Just as example. Can be any other service.
      }

},
  
  sitemap: {
    hostname: 'https://albvt.netlify.app/',
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
  
  manifest: {
      short_name: 'Blast',
    name: 'Blast sound',
    lang: 'en',
    start_url: '/audio/',
  background_color: '#61873b',
  display: 'standalone',
  scope: '/audio/',
  theme_color: '#61873b'

  },
   icon: {
    /* icon options */
    iconSrc:'/assets/icon.png',
  },
   workbox: {
    /* workbox options */
    runtimeCaching:[
        {
            urlPattern:'https://fonts.googleapis.com/.*',
            handler:'cacheFirst',
            method:'GET',
            strategyOptions:{ cacheableResponse:{statuses:[0,200]}}
            
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


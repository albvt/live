<template>
  <v-layout>
    <home></home>
  </v-layout>
    </template>

<script>
import home from '~/components/home.vue'
export default{
  
    data() {
      return {
        structuredData: {
               "@context": "https://schema.org",
           "@type": "WebSite",
           "url": "https://mansaah.com",
           "name": "blast",

        },
      }
    },
    head() {
      return {
        __dangerouslyDisableSanitizers: ['script'],
        script: [{ innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }],
        title: 'Blast| stream African Music, Mixtapes and Type Beats! 🚀,African Podcasts',
          meta: [
          
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'keywords', name: 'keywords', content: 'back to sleep, music, podcasts, afro-pop typebeats, African Mixtapes, music upload, audio direct sales, lol, humor, buy with bitcoin, comment, share, mansaah, mansaah.com, playlists' },
          { hid: 'description', name: 'description', content: 'Discover the magic of African Music at Blast, a community powered entertainment Rootsman vibe. Lift your spirits with hard beats mixtapes and audios, trending music, create playlists, inspiring podcasts, viral  African albums, and so much more!!!!' },
          { property:'og:locale' , content:'af-ZA' },
          { property:'og:type' ,content:'website' },
          { property:'og:title' ,content:'Blast | Stream African Music, Mixtapes and Type Beats!' },
          { property: 'og:description' ,content:'Discover the magic of African Music at Blast, a community powered entertainment Rootsman vibe. Lift your spirits with hard beats mixtapes and audios, trending music, create playlists, inspiring podcasts, viral  African albums, and so much more!!!!' },
          { property:'og:site_name' ,content:'Blast' },
          { property:'og:url' ,content: 'https://mansaah.com/'},
          {name:'twitter:card' ,content: 'summary'},
          {name:'twitter:description', content:'Discover the magic of African Music at Blast, a community powered entertainment Rootsman vibe. Lift your spirits with hard beats mixtapes and audios, trending music, create playlists, inspiring podcasts, viral  African albums, and so much more!!!!'},
          { name:'twitter:creator' ,content: '@mansaah'},
          {name: 'twitter:site', content: '@mansaah'},
          { name:'twitter:title', content:'Blast | Stream African Music ,Type Beats And Clean Podcasts 🚀'},
          { name:'twitter:image', content:'https://source.unsplash.com/dvaBJW5NytI'},
        ],
      }
    },
  components:{home},

}
</script>
<style>
</style>

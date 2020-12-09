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
           "url": "https://blastout.live",
           "name": "blast",

        },
      }
    },
    head() {
      return {
        __dangerouslyDisableSanitizers: ['script'],
        script: [{ innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }],
        title: 'Blast| stream Music, Mixtapes and Podcasts',
          meta: [
          
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'keywords', name: 'keywords', content: 'back to sleep, music, podcasts, afro-pop typebeats, African Mixtapes, music upload, audio direct sales, lol, humor, buy with bitcoin, comment, share, blastout, blastout.live, playlists' },
          { hid: 'description', name: 'description', content: 'Discover the magic of Music at Blast, a community powered entertainment with a blast in your vibe. Lift your spirits with mixtapes and tracks of your choice, trending music, create playlists, inspiring podcasts, viral  albums, and so much more!!!!' },
          { property:'og:locale' , content:'af-ZA' },
          { property:'og:type' ,content:'website' },
          { property:'og:title' ,content:'Blast | Stream African Music, Mixtapes and Type Beats!' },
          { property: 'og:description' ,content:'Discover the magic of Music at Blast, a community powered entertainment with a blast in your vibe. Lift your spirits with mixtapes and tracks of your choice, trending music, create playlists, inspiring podcasts, viral  albums, and so much more!!!!' },
          { property:'og:site_name' ,content:'Blast' },
          { property:'og:url' ,content: 'https://mansaah.com/'},
          {name:'twitter:card' ,content: 'summary'},
          {name:'twitter:description', content:'Discover the magic of Music at Blast, a community powered entertainment with a blast in your vibe. Lift your spirits with mixtapes and tracks of your choice, trending music, create playlists, inspiring podcasts, viral  albums, and so much more!!!!'},
          { name:'twitter:creator' ,content: 'blast'},
          {name: 'twitter:site', content: 'blast'},
          { name:'twitter:title', content:'Blast | Stream Tracks, Albums, Mixtapes, Podcasts and many more'},
          { name:'twitter:image', content:'https://source.unsplash.com/dvaBJW5NytI'},
        ],
      }
    },
  components:{home},

}
</script>
<style>
</style>

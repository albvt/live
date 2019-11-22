<template>

    <v-layout align-center
     justify-center
      >
      <v-flex
      xs10
      >
      <audiocard
      :audio ="audio"
      v-for="audio in audios"
      v-bind:key="audios.id"
      ></audiocard>

      </v-flex>
    </v-layout>
</template>

<script>
import audiocard from '~/components/audiocard.vue'
import axios from 'axios'


export default{
    head () {
    return {
      title:  'mansaah : African Music, Mixtapes and Type Beats!',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Discover the magic of African Music at Mansaah, a community powered entertainment Rootsman vibe. Lift your spirits with hard beats mixtapes and audios, trending music, create playlists, inspiring podcasts, viral  African albums, and so much more!!!!' },
      { hid: 'description', name: 'keywords', content: 'back to sleep, music, podcasts, afro-pop typebeats, African Mixtapes, music upload, audio direct sales, lol, humor, buy with bitcoin, comment, share, mansaah, mansaah.com, playlists' },
  
      ]
    }
  },
  components:{audiocard,},

  /*
  computed: {
    audios(){
      return this.$store.state.audio.all
    }
  }*/
   async asyncData () {
     const { data } = await axios.get('https://albvt.pythonanywhere.com/audio/')
     return { audios: data }
   }

}
</script>

<style scoped>

</style>

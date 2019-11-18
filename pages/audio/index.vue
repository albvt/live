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
      title: ' audio market',
      meta: [
        { hid: 'description', name: 'description', content: 'buy with bitcoin,mansaah,music ,audio books,podcasts,mixtapes and so much more' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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

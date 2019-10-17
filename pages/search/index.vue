<template>

    <v-layout align-center
     justify-center
      >
      <v-flex
      xs10
      >
      <div data-aos="zoom-in">
        <audiocard
        :audio ="audio"
        v-for="audio in audios"
        v-bind:key="audios.id"
        ></audiocard>
      </div>

    <audioplayer></audioplayer>

      </v-flex>
    </v-layout>
</template>

<script>
import audiocard from '~/components/audiocard.vue'
import audioplayer from '~/components/player/audioplayer.vue'
import axios from 'axios'


export default{

  head () {
    return {
      title: 'market',
      meta: [
        { hid: 'description', name: 'description', content: 'buy with bitcoin' }
      ]
    }
  },
  components:{audiocard,audioplayer},

/*computed: {
    audios(){
      return this.$store.state.audio.all
    }
  },*/

    async asyncData () {
     const { data } = await axios.get('http://albvt.pythonanywhere.com/random/')
     return { audios: data }
   }

}
</script>

<style scoped>

</style>

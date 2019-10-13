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
      title: 'market',
      meta: [
        { hid: 'description', name: 'description', content: 'buy with bitcoin' }
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
     const { data } = await axios.get('http://albvt.pythonanywhere.com/audio/')
     return { audios: data }
   }

}
</script>

<style scoped>

</style>

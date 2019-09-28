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
  components:{audiocard,},
  middleware:'auth',
  /*
  computed: {
    audios(){
      return this.$store.state.audio.all
    }
  }*/
  async asyncData () {
   const { data } = await axios.get('http://127.0.0.1:8000/audio/')
   return { audios: data }
 }

}
</script>

<style scoped>

</style>

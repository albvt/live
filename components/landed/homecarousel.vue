<template>
  <v-container fluid class="#000000" color="#000000" >
    <v-layout row >
      <v-flex  class="display-2 font-weight-black brown--text text-xs-center my-5">Top Trending Tapes</v-flex>
    </v-layout>
    <v-layout row  >
      <v-flex >

          <div class="card">
            <landedaudio
            v-for="audio in audios"
            v-bind:key="audios.id"
            :audio ="audio"
            ></landedaudio>
          </div>




      </v-flex>
    </v-layout>



  </v-container>
</template>
<script>
import landedaudio from './landedaudio.vue'
import axios from 'axios'


export default{
  components:{landedaudio,},

  computed: {
    audios(){
      return this.$store.state.audio.all
    }
  }
/*  async asyncData () {
   const { data } = await axios.get('http://127.0.0.1:8000/audio/?AudioFile_owner=2')
   return { audios: data }
 }*/

}
</script>

<style scoped>
.card {display: flex}
.card {
  overflow-x: auto;
  scrollbar-width: none;
}
.card::-webkit-scrollbar {
  display: none;
}

body {
   scrollbar-width: none
}
</style>


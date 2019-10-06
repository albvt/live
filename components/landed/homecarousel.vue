<template>
  <v-container fluid class="grey darken-4">
    <v-layout row >
      <v-flex  class="display-2 font-weight-black brown--text text-xs-center my-5">Top Trending Tapes</v-flex>
    </v-layout>
    <v-layout row  >
      <v-flex xs12 >
        <section class="card">
          <div class="card--content"
          v-for="audio in audios"
          v-bind:key="audios.id"
          >
            <landedaudio
            :audio ="audio"
            ></landedaudio>
          </div>
        </section>

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

.card {
  background-color: gray;
  min-width: 100%;
  min-height: 200px;
}
.card--content {
  background-color: gray;
  min-width: 200px;
  margin: 5px;
}

body {
  width: 100%;
  height: 100%;
}

body {
  background-color: gray;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
body {
   scrollbar-width: none
}
</style>

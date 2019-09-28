<template>
  <v-container fluid class="grey darken-4">
    <v-layout row >
      <v-flex  class="display-2 font-weight-black brown--text text-xs-center my-5">Most Downloaded</v-flex>
    </v-layout>
    <v-layout row  class="mt-2">
      <v-flex xs12 >
          <v-carousel
          contain
          cycle
          hide-delimiter-background
          show-arrows-on-hover
          >
            <v-carousel-item
            reverse-transition="fade-transition"
            transition="fade-transition"
              v-for="audio in audios"
              :key="audio.id">
              <div class="title">
                {{ audio.title }}
              </div>
                  <v-flex offset-sm3>
                    <v-card raised width="400px" height="500px" class="rounded-card">
                      <v-img :src="audio.cover">
                        <div class="container">
                <audio controls>
                  <source :src="audio.audioUrl" type="audio/ogg">
                    Your browser does not support the audio element.
                  </audio>
                </div>
                      </v-img>

                    </v-card>
                  </v-flex>



            </v-carousel-item>
          </v-carousel>

      </v-flex>
    </v-layout>



  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        audios: [
          { audioUrl: 'http://127.0.0.1:8000/media/Africa_Is_The_Future_-_Directors_Cut.mp3', id: '13', title: 'bantu on a low',cover:'http://127.0.0.1:8000/media/cover/Screenshot_20190907-081619.png', },
          { audioUrl: 'http://127.0.0.1:8000/media/Jam_Session_Ep5.mp3', id: '14', title: 'boom-boom chao',cover:'http://127.0.0.1:8000/media/cover/Screenshot_20190907-081528.png' },
          { audioUrl: 'http://127.0.0.1:8000/media/Jam_session_eps3_all_reggae.mp3', id: '15', title: 'Ethiopian Wilding',cover:'http://127.0.0.1:8000/media/cover/Screenshot_20190907-081528.png' },
        ]
      }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
  .rounded-card{
      border-radius:10px;
  }
</style>

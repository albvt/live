<template>

    <v-container
      fluid
      grid-list-md
      pa-2
    >
      <v-layout
      align-center
      justify-center
       row
       >
        <v-flex
         xs12
         sm6
         >
         <v-hover v-slot:default="{ hover }">
           <v-card
            color="grey darken-2"
            class="rounded-card"
            >

             <v-list-item>
               <v-list-item-avatar color="black"></v-list-item-avatar>
               <v-list-item-content>
                 <v-btn color="black" icon >
                   <NuxtLink :to="'/user/'+audio.AudioFile_owner"><v-icon>mdi-account</v-icon>
                       </NuxtLink>
                 </v-btn>
               </v-list-item-content>
             </v-list-item>
             <v-img :src="audio.AudioFile_cover" >
               <v-expand-transition>
           <div
             v-if="hover"
             class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
             style="height: 100%;"
           >
             $14.99 with Free Wallpaper
           </div>
         </v-expand-transition>
             </v-img>

             <div class="container">
     <audio controls>
       <source :src="audio.AudioFile" type="audio/ogg">
         Your browser does not support the audio element.
       </audio>
     </div>

             <v-card-actions>
               <v-spacer></v-spacer>
               <!--magic other button-->

               <v-btn
               text

               >
                 Add-To-Cart
               </v-btn>
               <v-spacer></v-spacer>
             </v-card-actions>
           </v-card>
         </v-hover>

        </v-flex>

        <template>
  <v-card
    class="mx-auto"
    max-width="600"
    color="grey darken-3"
  >
    <v-toolbar
      flat
      dense
    >
      <v-toolbar-title>
        <span class="subheading">METRONOME</span>
      </v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-btn icon disabled>
        <v-icon>mdi-download-outline</v-icon>
      </v-btn>
    </v-toolbar>

    <v-card-text>
      <v-row
        class="mb-4"
        justify="space-between"
      >
        <v-col class="text-left">
          <span
            class="display-3 font-weight-light"
            v-text="bpm"
          ></span>
          <span class="subheading font-weight-light mr-1">BPM</span>
          <v-fade-transition>
            <v-avatar
              v-if="isPlaying"
              :color="color"
              :style="{
                animationDuration: animationDuration
              }"
              class="mb-1 v-avatar--metronome"
              size="12"
            ></v-avatar>
          </v-fade-transition>
        </v-col>
        <v-col class="text-right">
          <v-btn
            :color="color"
            dark
            depressed
            fab
            @click="toggle"
          >
            <v-icon large>
              {{ isPlaying ? 'mdi-pause' : 'mdi-play' }}
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <v-slider
        v-model="bpm"
        :color="color"
        track-color="grey"
        always-dirty
        min="40"
        max="218"
      >
        <template v-slot:prepend>
          <v-icon
            :color="color"
            @click="decrement"
          >
            mdi-minus
          </v-icon>
          <div class="container">
  <audio controls>
    <source :src="audio.AudioFile" type="audio/ogg">
      Your browser does not support the audio element.
    </audio>
  </div>
        </template>

        <template v-slot:append>
          <v-icon
            :color="color"
            @click="increment"
          >
            mdi-plus
          </v-icon>
        </template>
      </v-slider>
    </v-card-text>
  </v-card>
</template>

      </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios'

export default {
  validate ({ params }) {
    return !isNaN(+params.id)
  },
  async asyncData ({ params, error }) {
    try {
      const { data } = await axios.get(`http://albvt.pythonanywhere.com/audio/${+params.id}`)
      return {audio:data}
    } catch (e) {
      error({ message: 'audio not found', statusCode: 404 })
    }
  },

  data: () => ({
     bpm: 79,
     interval: null,
     isPlaying: false,
   }),

   computed: {
      color () {
        if (this.bpm < 100) return 'purple'
        if (this.bpm < 125) return 'teal'
        if (this.bpm < 140) return 'green'
        if (this.bpm < 175) return 'orange'
        return 'red'
      },

      animationDuration () {
       return `${60 / this.bpm}s`
     },
   },

   methods: {
     decrement () {
       this.bpm--
     },
     increment () {
       this.bpm++
     },
     toggle () {
       this.isPlaying = !this.isPlaying
     },
   },
}
</script>

<style>
  @keyframes metronome-example {
    from {
      transform: scale(.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-name: metronome-example;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  .rounded-card{
      border-radius:10px;
  }

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}

</style>

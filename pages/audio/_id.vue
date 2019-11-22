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
            color="#0E2F44"
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
             <vue-plyr>
             <audio controls>
       <source :src="audio.AudioFile" type="audio/ogg">
         Your browser does not support the audio element.
                </audio>
             </vue-plyr>
         </div>

             <v-card-actions>
                        <form action="https://bitpay.com/checkout" method="post">
  <input type="hidden" name="action" value="checkout" />
  <input type="hidden" name="posData" value="" />
  <input type="hidden" name="data" value="pgpFUIlDzk1/GLp96JnzTXS/RNUhp/A0Mb2O5K28UwmixG8xHYaQuUwGjEXBLG0v66ERqs23igvKeWqLZ2H23wG0CmeuCJOhROFH1rv+Vl0=" />
  <input type="image" src="https://bitpay.com/cdn/en_US/bp-btn-pay-currencies.svg" name="submit" style="width: 210px" alt="BitPay, the easy way to pay with bitcoins.">
</form>

               <v-spacer></v-spacer>
               <!--magic other button-->

               <v-btn
               text

               >
                 Add-To-Cart
               </v-btn>
               <v-spacer></v-spacer>
               <a :href="audio.AudioFile" download>download<v-icon>mdi-file</v-icon></a>
             </v-card-actions>
           </v-card>
         </v-hover>

        </v-flex>

        <template>
  <v-card
    class="mx-auto"
    max-width="600"
    color="#0E2F44"
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
          <vue-plyr>
          <audio controls>
    <source :src="audio.AudioFile" type="audio/ogg">
      Your browser does not support the audio element.
            </audio>
          </vue-plyr>
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
                                                <adsbygoogle />

      </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios'

export default {
head () {
    return {
      title: this.audio.AudioFile_tag,
      meta: [
        { hid: 'description', name: 'description', content: 'Discover the magic of African Music at Mansaah, a community powered entertainment Rootsman vibe. Lift your spirits with hard beats mixtapes and audios, trending music, create playlists, inspiring podcasts, viral  African albums, and so much more!!!!' },
         { hid: 'description', name: 'keywords', content: 'back to sleep, music, podcasts, afro-pop typebeats, African Mixtapes, music upload, audio direct sales, lol, humor, buy with bitcoin, comment, share, mansaah, mansaah.com, playlists' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property:'og:locale' , content:'af-ZA' },
      { property:'og:type' ,content:'website' },
      { property:'og:title' ,content:'African Music, Mixtapes and Type Beats!' },
      { property: 'og:description' ,content:'buy digital African Art with bitcoin,African landscape,African gifs,and rootsman pics' },
      { property:'og:site_name' ,content:'mansaah' },
      { property:'og:url' ,content: 'https://mansaah.com/'},
      {name:'twitter:card' ,content: 'summary'},
      {name:'twitter:description', content:'Discover the magic of African Music at Mansaah, a community powered entertainment Rootsman vibe. Lift your spirits with hard beats mixtapes and audios, trending music, create playlists, inspiring podcasts, viral  African albums, and so much more!!!!'},
      { name:'twitter:creator' ,content: '@kachaq'},
      {name: 'twitter:site', content: '@kachaq'},
      { name:'twitter:title', content:''},
      { name:'twitter:image', content:''},
      ]
    }
  },
  validate ({ params }) {
    return !isNaN(+params.id)
  },
  async asyncData ({ params, error }) {
    try {
      const { data } = await axios.get(`https://albvt.pythonanywhere.com/audio/${+params.id}`)
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

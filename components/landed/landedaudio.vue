<template>
<div class="container">
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
        md12
        lg7
        xl6
        offset-sm3
        >
        <v-hover v-slot:default="{ hover }">
        <v-card
        color="#0E2F44"
        raised
        class="rounded-card"
        :elevation="hover ? 12 : 2"
        >
        <v-img title="Afro pop mixtapes and beats" :src="audio.AudioFile_cover" height="200px" alt="African Hit Music">
          <v-expand-transition>
      <div
        v-if="hover"
        class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 white--text"
        style="height: 100%;"
      >
        <v-icon>mdi-play</v-icon>
      </div>
    </v-expand-transition>
        </v-img>

        
        </v-img>
        <a :href="'/audio/'+audio.id"><v-card-text>{{audio.AudioFile_tag}}</v-card-text><v-icon>mdi-download</v-icon></a>
          <span>{{audio.AudioFile_caption}}</span>
        </v-card>

        </v-hover>
      </v-flex>

    </v-layout>
  </v-container>
</div>

</template>
<script>
export default {
  name:"landedaudio",
    props: ["audio",],
};
</script>
<style>
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


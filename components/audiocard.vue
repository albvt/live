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
        <v-card
        color="grey darken-4"
        raised
        class="rounded-card"
        >
        <v-img :src="audio.AudioFile_cover" height="200px"></v-img>
        <div class="container">
<audio controls>
  <source :src="audio.AudioFile" type="audio/ogg">
    Your browser does not support the audio element.
  </audio>
</div>
        <v-card-text>{{audio.AudioFile_tag}}</v-card-text>
        </v-img>
          <v-card-actions>
            <v-btn text>clap</v-btn>

            <v-spacer></v-spacer>
<!--real deal button-->

<v-btn color="purple" icon >
  <NuxtLink :to="'/audio/'+audio.id"><v-icon>mdi-music</v-icon>
      </NuxtLink>
</v-btn>
          </v-card-actions>
          <span>{{audio.AudioFile_caption}}</span>
        </v-card>


      </v-flex>
    </v-layout>
  </v-container>
</div>

</template>
<script>
export default {
  name:"audiocard",
    props: ["audio",],
};
</script>
<style>
.rounded-card{
    border-radius:10px;
}
</style>

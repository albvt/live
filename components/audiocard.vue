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
        color="#0E2F44"
        raised
        class="rounded-card"
        >
        <v-img :src="audio.AudioFile_cover" height="200px"></v-img>
        <div>
       <vue-plyr>
<audio controls>
  <source :src="audio.AudioFile" type="audio/ogg">
    Your browser does not support the audio element.
  </audio>
  </vue-plyr>
  </div>

        <v-card-text>{{audio.AudioFile_tag}}</v-card-text>
        </v-img>
          <v-card-actions>
                <v-chip
    class="ma-2"
    color="#18D3AF"
    text-color="white"
  >
    <v-avatar left>
      <v-icon>mdi-bitcoin</v-icon>
    </v-avatar>
    {{image.ImageFile_claps}}  buys
  </v-chip>
            

            <v-spacer></v-spacer>
<!--real deal button-->
<a :href="'/audio/'+audio.id"><v-icon>mdi-download</v-icon></a>
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

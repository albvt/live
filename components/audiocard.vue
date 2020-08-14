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
        color="#000000"
        raised
        class="rounded-card"
        >
        <v-img title="African Music African type Beats Mansaah Mansaah Music " :src="audio.AudioFile_cover" height="200px" alt="Afro beats mansaah"></v-img>
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
          <v-btn text @click="downloadWithAxios()">download</v-btn>

            <v-spacer></v-spacer>
<!--real deal button-->
<a :href="'/audio/'+audio.id" style="text-decoration:none" ><v-icon>mdi-download-outline</v-icon></a>
          </v-card-actions>
          <span>{{audio.AudioFile_caption}}</span>
        </v-card>


      </v-flex>
    </v-layout>
  </v-container>
</div>

</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
export default {
  name:"audiocard",
    props: ["audio",],

  data() {
    return {
      url: this.audio.AudioFile
    }
  },


  methods: {

    forceFileDownload(response){
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'mansaah.mp3') //or any other extension
      document.body.appendChild(link)
      link.click()
    },

    downloadWithAxios(){
      axios({
        method: 'GET',
        url: this.url,
        responseType: 'blob'
      })
      .then(response => {

        this.forceFileDownload(response)

      })
      .catch(() => console.log('error occured'))
    }
  }




}
</script>
<style>
.rounded-card{
    border-radius:10px;
}
</style>

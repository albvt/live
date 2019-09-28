<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <!-- @submit handles any form of submission. -->
  <!-- .prevent keeps the event from bubbling around and doing anything else. -->
      <form @submit.prevent="handleSubmit" >

        <label> Add Mixtape File
            <input type="file" id="AudioFile" ref="AudioFile" v-on:change="handleFileUpload()"/>
          </label>

          <label> Add Mixtape Cover
              <input type="file" id="AudioFile_cover" ref="AudioFile_cover" v-on:change="handleFileUpload()"/>
            </label>

          <p>
             <v-text-field v-model="AudioFile_tag"  color="teal" label="tag" ></v-text-field>
        <!--   <input type="text" placeholder='Tag' id='AudioFile_tag' v-model="AudioFile_tag" required/>-->
         </p>

         <p>
            <v-text-field v-model="AudioFile_caption"  color="teal" label="tag" ></v-text-field>
        <!--  <input type="text" placeholder='caption' id='caption' v-model="AudioFile_caption" required/>-->
        </p>

         <p>
          <input type="number" placeholder='owner' id='AudioFile_owner' v-model="AudioFile_owner" required/>
        </p>

        <p>
         <input type="number" placeholder='clap' id='AudioFile_claps' v-model="AudioFile_claps" required/>
       </p>

        <v-btn v-on:click="handleSubmit()" >upload<v-icon>mdi-upload</v-icon></v-btn>

      <!--  <button v-on:click="handleSubmit()">Submit</button>-->
     </form>

    </div>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    /*
      Defines the data used by the component
    */
    data(){
      return {

        AudioFile: '',
        AudioFile_tag: '',
        AudioFile_caption: '',
        AudioFile_owner: '',
        AudioFile_claps: '',

      }
    },

    methods: {
      /*
        Submits the file to the server
      */
      handleSubmit(){
        /*
                Initialize the form data
            */
            let formData = new FormData();

            /*
                Add the form data we need to submit
            */
            formData.append('AudioFile', this.AudioFile);
            formData.append('AudioFile_tag', this.AudioFile_tag);
            formData.append('AudioFile_caption', this.AudioFile_caption);
            formData.append('AudioFile_owner', this.AudioFile_owner);
            formData.append('AudioFile_claps', this.AudioFile_claps);

        /*
          Make the request to the POST /url URL
        */  let url = 'http://127.0.0.1:8000/upload/';
            axios.post( url,
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
      },

      /*
        Handles a change on the file upload
      */
      handleFileUpload(){
        this.AudioFile = this.$refs.AudioFile.files[0];
        this.AudioFile_cover = this.$refs.AudioFile_cover.files[0];

      }
    }
  }
</script>

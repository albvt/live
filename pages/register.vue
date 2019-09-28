<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <!-- @submit handles any form of submission. -->
  <!-- .prevent keeps the event from bubbling around and doing anything else. -->
      <form @submit.prevent="handleSubmit" >

        <label> set profile
            <input type="file" id="user_profileimage" ref="user_profileimage" v-on:change="handleFileUpload()"/>
          </label>

          <p>
          <!-- <input type="text" placeholder='Tag' id='ImageFile_tag' v-model="ImageFile_tag" required/> -->
           <v-text-field v-model="user_name"  color="purple" label="username" ></v-text-field>
         </p>

         <p>
           <v-text-field v-model="user_email"  color="purple" label="email" ></v-text-field>
         </p>

         <p>
           <v-text-field v-model="user_about"  color="purple" label="short about" ></v-text-field>
        <!--  <input type="text" placeholder='caption' id='caption' v-model="ImageFile_caption" required/>-->
        </p>

         <p>
          <input type="number" placeholder='follower' id='user_follower' v-model="user_follower" required/>
        </p>

        <v-text-field
              type="password"
              label="password"
              counter
              color="purple"
               v-model="user_password"
            ></v-text-field>


       <v-btn v-on:click="handleSubmit()">upload <v-icon>mdi-upload-outline</v-icon></v-btn>
      <!--  <button v-on:click="handleSubmit()">Submit</button> -->
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

        user_name: '',
        user_email: '',
        user_about: '',
        user_follower: '',
        user_password: '',
        user_profileimage: '',

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
            formData.append('user_name', this.user_name);
            formData.append('user_email', this.user_email);
            formData.append('user_about', this.user_about);
            formData.append('user_follower', this.user_follower);
            formData.append('user_password', this.user_password);
            formData.append('user_profileimage', this.user_profileimage);

        /*
          Make the request to the POST /url URL
        */  let url = 'http://127.0.0.1:8000/user/create/';
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
        this.user_profileimage = this.$refs.user_profileimage.files[0];

      }
    }
  }
</script>

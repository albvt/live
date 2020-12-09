<template>
  <v-container>
    <v-layout>
      <div>
        <singlefile></singlefile>
      </div>
    </v-layout>
  </v-container>


</template>
<script>
import singlefile from '~/components/fileupload/singlefile.vue'
  export default {
    middleware:'auth',
    layout:'dashboard',
    components:{singlefile,},
    head: {
     title: 'Blast |dashboard ',
     meta: [
       { hid: 'description', name: 'description', content: 'dashboard to upload and listen to mixtapes, music and podcasts ' }
     ],
     noscript: [
       { innerHTML: 'Body No Scripts', body: true }
     ],
     script: [
       { src: '/head.js' },
       // Supported since 1.0
       { src: '/body.js', body: true },
       { src: '/defer.js', defer: '' }
     ]
   },
  }
</script>
<style>
</style>

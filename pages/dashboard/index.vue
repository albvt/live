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
  }
</script>
<style>
</style>

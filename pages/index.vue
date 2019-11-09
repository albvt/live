<template>
  <v-layout>
    <home></home>
  </v-layout>
    </template>

<script>
import home from '~/components/home.vue'
export default{
   head () {
    return {
      
      meta: [
        { hid: 'description', name:'google-site-verification', content:'oAzC1OHtW4HnIpGtv9G_luiGCGfP681gbhbxZD36wgQ'  }
      ]
    }
  },
  components:{home},

}
</script>
<style>
</style>

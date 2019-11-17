<template>
  <v-layout>
    <home></home>
  </v-layout>
    </template>

<script>
import home from '~/components/home.vue'
export default{
   head: {
     title: 'Home page 🚀',
     meta: [
       { hid: 'description', name: 'description', content: ' mansaah ,African typebeats ,Mixtapes,insipiring podcasts,audio books' }
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
  components:{home},

}
</script>
<style>
</style>

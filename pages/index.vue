<template>
  <v-layout>
    <home></home>
  </v-layout>
    </template>

<script>
import home from '~/components/home.vue'
export default{
  
    data() {
      return {
        structuredData: {
          "@context": "http://schema.org",
           "@type": "WebSite",
           "url": "https://mansaah.com",
           "name": "Mansaah",
        },
      }
    },
    head() {
      return {
        __dangerouslyDisableSanitizers: ['script'],
        script: [{ innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }]
      }
    },
  components:{home},

}
</script>
<style>
</style>

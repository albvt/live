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
          "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://www.mansaah.com/",
  "potentialAction": [{
    "@type": "SearchAction",
    "target": "https://albvt.pythonanywhere.com/search?ImageFile_tag={search_term_string}&ImageFile_caption={search_term_string}",
    "query-input": "required name=search_term_string"
  },{
    "@type": "SearchAction",
    "target": "android-app://com.example/https/query.example.com/search/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }]
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

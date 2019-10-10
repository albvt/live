<template>
  <v-container>
    <v-layout>
      <v-flex
       >
       <homelanded></homelanded>
       <HomeDetails></HomeDetails>
        <homecarousel></homecarousel>
        


      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import homecarousel from './landed/homecarousel.vue'
import HomeDetails from './landed/homedetails'
import homelanded from './landed/homelanded.vue'
export default {
  components:{homecarousel,HomeDetails,homelanded},
}
</script>
<style>
</style>

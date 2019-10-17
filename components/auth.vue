<template>
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
      <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title> Social Login </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                <div>Welcome to Mansa</div>
                <p class="display-1 text--primary">
                  •Afrika•On•Stream
                </p>
              </v-card-text>
               </v-card>
                    
                          <googleauth></googleauth>
                    
              
               

      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import googleauth from './googleauth.vue'
export default{
  components:{googleauth,},
  name:"auth",
  
}
</script>
<style>
</style>

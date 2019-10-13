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
                    
                          <googleauth></googleauth>
                    
              
                    <v-card-actions>
                        <v-btn color="primary" :disabled="!valid">continue</v-btn>
                          <v-spacer></v-spacer>
                          <v-btn color="teal" text to="/register" >sign up</v-btn>
                    </v-card-actions>
                </v-card>

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

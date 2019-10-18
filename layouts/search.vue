<template>
  <v-app
  style="background: #0E2F44;"
  >
          <v-app-bar
            :clipped-left="clipped"
            fixed
            app
            color="#0E2F44"
          >
          <v-btn
           icon
           to="/"
          >
          <v-icon color="#18D3AF">mdi-home</v-icon>
          </v-btn>
            <v-spacer />
            <v-text-field
            label="Search Db"

            color="purple"
            ></v-text-field>
            <v-btn
              icon
              to="/search"
              @click.stop="rightDrawer = !rightDrawer"
            >
              <v-icon color="#18D3AF">mdi-magnify</v-icon>
            </v-btn>

          </v-app-bar>
          <!--include components-->
          <nuxt/>



  </v-app>

</template>
<script>
</script>
<style>
</style>

<template>
  <v-app>
          <v-app-bar
            :clipped-left="clipped"
            fixed
            app
          >
          <v-btn
           icon
           to="/"
          >
          <v-icon>mdi-home</v-icon>
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
              <v-icon>mdi-magnify</v-icon>
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

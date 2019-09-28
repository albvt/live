<template>
<div class="container">
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
        <v-card
        color="grey-blue darken-2"
        raised
        class="rounded-card"
        router
        :to="'/user/'+user.user_id"
        >
        <v-img :src="user.user_profileimage">
        <v-card-text>{{user.user_name}}</v-card-text>
        <div class="title">
          {{ user.user_about }}
        </div>

        </v-img>
          <v-card-actions>
<!--real deal button
<v-btn color="purple" icon >
  <NuxtLink :to="'/user/'+user.user_id"><v-icon>mdi-account</v-icon>
      </NuxtLink>
</v-btn>

-->
          </v-card-actions>
        </v-card>


      </v-flex>
    </v-layout>
  </v-container>
</div>

</template>
<script>
export default {
  name:"usercard",
    props: ["user",],
};
</script>
<style>
.rounded-card{
    border-radius:10px;
}
.title {
  position: absolute;
  bottom: 50px;
  background-color: rgba(0,0,0,0.5);
  color: white;
  font-size: 2em;
  padding: 20px;
}

</style>

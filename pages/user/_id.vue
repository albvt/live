<template>

  <v-layout>
    <div>
      <audiocard
      :audio ="audio"
      v-for="audio in audios"
      v-bind:key="audios.id"
      ></audiocard>

    </div>

  <!--  <v-card
    color="grey darken-2"
    raised
    class="rounded-card"
    >
    <v-img :src="user.user_profileimage">
    <v-card-text>{{user.user_name}}</v-card-text>
    <div class="title">
      {{ user.user_about }}
    </div>
    </v-img>


  </v-card>-->


  </v-layout>

</template>

<script>
import audiocard from '~/components/audiocard.vue'
import axios from 'axios'
export default{
  components:{audiocard},


    validate ({ params }) {
      return !isNaN(+params.id)
    },
    async asyncData ({ params, error }) {
      try {
        const { data } = await axios.get(`http://127.0.0.1:8000/audio/?AudioFile_owner=${+params.id}`)
        return {audios:data}
      } catch (e) {
        error({ message: 'user not found', statusCode: 404 })
      }
    },

}


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

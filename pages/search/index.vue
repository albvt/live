<template>

    <v-layout align-center
     justify-center
      >
      <v-flex
      xs10
      >
      <div data-aos="zoom-in">
        <randomaudiocard
        :audio ="audio"
        v-for="audio in audios"
        v-bind:key="audios.id"
        ></randomaudiocard>
      </div>

    

      </v-flex>
    </v-layout>
</template>

<script>
import randomaudiocard from '~/components/randomaudiocard.vue'
import axios from 'axios'


export default{
layout:'search',

  head () {
    return {
      title: 'search content',
      meta: [
        { hid: 'description', name: 'description', content: 'search mansaah music db for audio and mixtapes' }
      ]
    }
  },
  components:{randomaudiocard,},

/*computed: {
    audios(){
      return this.$store.state.audio.all
    }
  },*/

    async asyncData () {
     const { data } = await axios.get('http://albvt.pythonanywhere.com/random/')
     return { audios: data }
   }

}
</script>

<style scoped>

</style>

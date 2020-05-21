<template>
  <div>
    <auth></auth>
    <v-btn outline fab @click="googleSignIn" color="#4285F4"><v-icon>fab fa-google</v-icon></v-btn>
  </div>
</template>
<script>
import auth from '~/components/auth.vue'
export default{
  components:{auth,},
  head () {
    return {
      title: 'Mansaah| login',
      meta: [
        { hid: 'description', name: 'description', content: 'login to mansaah,African mixtapes and audio,TypeBeats,African Music ' },
              { name: 'viewport', content: 'width=device-width, initial-scale=1' },
              
      ]
    }
  },
  methods:{
  googleSignIn () {
        this.provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(this.provider).then(result => {
          // store the user ore wathever
          this.$router.push('/dashboard')
        }).catch(e => {
          this.$snotify.error(e.message)
          console.log(e)
        })
      }
  },
}
</script>

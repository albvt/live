<template>
  <div>
    <auth></auth>
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
}
</script>

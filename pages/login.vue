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
      title: 'login',
      meta: [
        { hid: 'description', name: 'description', content: 'login to mansaah,African mixtapes and audio ' }
      ]
    }
  },
}
</script>

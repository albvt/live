<template>
  <div>
    <usercard
    :user ="user"
    v-for="user in users"
    v-bind:key="users.id"
    ></usercard>
  </div>



</template>
<script>
import axios from 'axios'
import usercard from '~/components/usercard'
export default{
  components:{usercard},

  async asyncData () {
   const { data } = await axios.get('https://kachaq.com/user')
   return { users: data }
 }

}
</script>
<style>
</style>

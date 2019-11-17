<template>
  <div>
    add to cart
  </div>
</template>
<script>
export default{
head: {
     title: 'checkout 🚀',
     meta: [
       { hid: 'description', name: 'description', content: 'buy with bitcoin,audio books,African mixtapes,podcasts' }
     ],
     noscript: [
       { innerHTML: 'Body No Scripts', body: true }
     ],
     script: [
       { src: '/head.js' },
       // Supported since 1.0
       { src: '/body.js', body: true },
       { src: '/defer.js', defer: '' }
     ]
   },
}
</script>
<style>
</style>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Exchange/>
  </div>
</template>

<script>
// @ is an alias to /src
import Exchange from '@/components/Exchange.vue'

export default {
  name: 'home',
  components: {
    Exchange
  }
}
</script>

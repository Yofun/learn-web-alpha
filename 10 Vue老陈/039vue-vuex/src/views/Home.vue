<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <h2>{{count}}</h2>
      <button @click="count++">点我增加</button>
      <h2>{{$store.state.num}}</h2>
      <button @click="$store.commit('addNum')">点我增加store</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      count: 0
    }
  },
  mounted() {
    console.log(this.$store);
  },
}
</script>

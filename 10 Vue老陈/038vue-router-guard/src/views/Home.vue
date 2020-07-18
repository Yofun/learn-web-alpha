<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <button @click="clickRequest">使用axios请求百度</button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

import server from '@/common/http/request';

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  methods: {
    clickRequest: () => {
      server.get('api/v2/banners')
      .then(response=>{
        console.log(response);
      })
      .catch(err=>{
        console.log(err);
      });
    }
  }
};
</script>

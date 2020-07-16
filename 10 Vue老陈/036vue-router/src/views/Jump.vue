<template>
  <div>
    <router-link :to="{path: '/me'}">跳转到我的</router-link>
    <button @click="jump">跳转到我的</button>

    <button @click="go">前进</button>
    <button @click="back">后退</button>
  </div>
</template>

<script>
export default {
  methods: {
    jump: function() {
      // 1. 通过名字跳转
      // this.$router.push({name: 'Me'});

      // 2. 通过名字跳转携带参数
      // this.$router.push({ name: "Me", params: {name: '刘德华',age: 18} });

      // 3. 通过路径跳转
      //   this.$router.push({
      //     // path: "/news",
      //     name: "news",
      //     params: { name: "刘德华", age: 18 }
      //   });

      // 3. query
        this.$router.push({
          path: "/news/image",
          query: { name: "刘德华", age: 18 }
        });

      // 4. replace 替换当前页面
    //   this.$router.replace({
    //       path: "/news/image",
    //       query: { name: "刘德华", age: 18 }
    //   })
    },
    go: function() {
        this.$router.go(1);
    },
    back: function() {
        this.$router.back()
    }
  }
};
</script>
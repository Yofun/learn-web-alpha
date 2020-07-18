<template>
  <div>
    <base target="_blank"/>
    <h1>我是Action</h1>
    <button @click="clickGetData">获取数据1</button>
    <button @click="getBanner">获取数据2</button>
    <div>
      <a :href="item.url" v-for="(item,index) in banners" :key="index">
        <img :src="item.image" alt :title="item.title" />
      </a>
    </div>
  </div>
</template>
<script>
import { mapState,mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["banners"])
  },
  methods: {
    clickGetData: function() {
      this.$store.dispatch("getBanner",'hello actions!');
    },
    ...mapActions(['getBanner'])
  }
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
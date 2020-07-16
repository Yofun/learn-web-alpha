<template>
  <div>
    <h1>新闻列表: {{params}}</h1>
    <router-link :to="{name: 'image',params:{id:'123'}}">图片</router-link>
    <router-link :to="{name: 'content',params:{id:'456'}}">内容</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // this.id = this.$route.params.id;
    // this.cid = this.$route.params.cid;
  },
  computed: {
    params: function() {
      return JSON.stringify(this.$route.params);
    }
  }
};
</script>
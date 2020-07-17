<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    // ...
    console.log('-----beforeRouteEnter-----');
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log('-----beforeRouteUpdate-----');
  },
  beforeRouteLeave (to, from, next) {
    // ...
    console.log('-----beforeRouteLeave-----');
    next();
  },
  mounted() {
    console.log('About 页面 mounted',this.$route);
  },
}
</script>
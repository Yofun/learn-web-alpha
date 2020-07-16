<template>
  <div>
    <img
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594922872834&di=d310112e47a6a63b4904a8761f5d7156&imgtype=0&src=http%3A%2F%2Fpic.feizl.com%2Fupload%2Fallimg%2F170614%2F0913162K0-3.jpg"
      alt="美女"
    />
    <p>params>>{{params}}</p>
    <p>query>>{{query}}</p>
  </div>
</template>

<script>
export default {
  mounted() {},
  computed: {
    params: function() {
      return JSON.stringify(this.$route.params);
    },
    query: function() {
      return JSON.stringify(this.$route.query);
    }
  }
};
</script>
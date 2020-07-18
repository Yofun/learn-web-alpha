<template>
  <div>
    <h1>名字：{{name}}</h1>
    <h1>年龄：{{age}}</h1>
    <h1>数量：{{num}}</h1>
    <h1>描述：{{msg}}</h1>

    <input type="text" :value="name" @input="onInput"/>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  //   computed: {
  // name: {
  //   get() {
  //     return this.$store.state.name;
  //   },
  //   set(val) {
  //     this.$store.commit("setName",val);
  //   }
  // },
  // age() {
  //   return this.$store.state.age;
  // },
  // num() {
  //   return this.$store.state.num;
  // },
  // msg() {
  //   return this.$store.state.msg;
  // }
  //   }

    // 第一种：map映射
//   computed: mapState(['name','age','num','msg'])

    computed: {
        // ...mapState(['name','age','num','msg'])
        ...mapState({
            // name:state=>state.name,
            name:'name',
            age:state=>state.age,
            num:state=>state.num,
            msg:state=>state.msg
        })
    },
    methods: {
        onInput: function(e) {
            this.$store.commit('setName',e.target.value);
        }
    },
};
</script>
<style scoped>
</style>
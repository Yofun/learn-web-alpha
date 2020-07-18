<template>
    <div>
        <h1>我是Module</h1>
        <div>
            <h2>
                User模块数据
            </h2>
            <h3>{{name}}</h3>
            <h3>{{$store.getters['user/subName']}}</h3>
            <h3>{{subName}}</h3>
            <h3>{{age}}</h3>

            <button @click="$store.commit('user/setAge')">修改年龄1</button>
            <button @click="setAge">修改年龄2</button>
        </div>
    </div>
</template>

<script>

import { mapState,mapGetters,mapMutations } from 'vuex';

export default {
    computed: {
        // ...mapState(['user/name','user/age'])
        ...mapState('user',['name','age']),
        ...mapGetters('user',['subName'])
    },
    mounted() {
        console.log(this.$store);
    },
    methods: {
        ...mapMutations('user',['setAge'])
    },

}
</script>
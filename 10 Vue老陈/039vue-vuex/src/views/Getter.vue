<template>
    <div>
        <h1>{{name}}</h1>
        <h1>{{nameReverse}}</h1>
        <h1>{{msg}}</h1>
        <input type="text" :value="msg" @input="onInput">
    </div>
</template>
<script>
import{mapState,mapGetters} from 'vuex'

export default {
    computed: {
        ...mapState(['name','msg']),
        ...mapGetters(['nameReverse','msgAdd']),
    },
    methods: {
        onInput:function(e) {
            this.msgAdd(e.target.value);
        }
    },
}
</script>
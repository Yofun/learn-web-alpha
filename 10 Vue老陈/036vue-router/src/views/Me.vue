<template>
    <div>
        <h1>我的个人中心</h1>
        <p>{{ params }}</p>
    </div>
</template>

<script>
export default {
    mounted() {
        
    },
    computed: {
        params: function() {
            return JSON.stringify(this.$route.params);
        }
    },
}
</script>
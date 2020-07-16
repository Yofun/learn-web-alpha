<template>
  <div class="input">
    <textarea @keydown.enter.prevent="sendEvent" v-model="inputVal"></textarea>
    <div style="text-align:right;">
      <button :disabled="!inputVal" @click="sendEvent">发送</button>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            inputVal: ''
        }
    },
    methods: {
        // 点击确定事件
        sendEvent: function(){
            this.$parent.sendEvent(this.inputVal);
            // 清空列表
            this.inputVal = '';
        }
    },
};
</script>
<style scoped>
.input {
  margin: 10px;
}

.input textarea {
  width: 100%;
  height: 100px;
  padding: 10px;
  resize: none;
  outline: none;
  box-sizing: border-box;
}
</style>
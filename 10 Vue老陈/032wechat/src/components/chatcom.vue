<template>
  <div class="chat">
    <h1>用户：{{user.username}}</h1>
    <!-- 聊天列表 -->
    <div class="chat_list" ref="chat_list">
      <chat-item
        v-for="(item, index) in chatList"
        :chatitem="item"
        :key="index"
        :currentuser="user"
      ></chat-item>
    </div>
    <chatinput-com></chatinput-com>
  </div>
</template>
<script>
import chatItem from "./chatitem";
import chatinputCom from "./chatinputcom";

export default {
  components: {
    chatItem,
    chatinputCom
  },
  data() {
    return {
      user: this.currentuser,
      chatList: [
        // {
        //   user: {
        //     username: "小明",
        //     headimg:
        //       "http://img5.imgtn.bdimg.com/it/u=2714447129,2168677930&fm=26&gp=0.jpg"
        //   },
        //   chatcontent: "今天吃了吗？"
        // }
      ]
    };
  },
  props: ["currentuser"],
  watch: {
    currentuser: function(n, o) {
      this.user = n;
    }
  },
  methods: {
    sendEvent: function(val) {
      if (!val.trim()) {
        return;
      }
      this.chatList.push({
        user: this.currentuser,
        chatcontent: val
      });

      this.$nextTick(() => {
        // 每次添加完毕后容器滑动到最底部
        let ele = this.$refs.chat_list;
        ele.scrollTop = ele.scrollHeight;
      });
    }
  }
};
</script>

<style scoped>
.chat_list {
  height: 480px;
  overflow: scroll;
  padding: 10px;
}

.chat {
  width: 500px;
  height: 700px;
}
</style>
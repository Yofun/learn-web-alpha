<template>
  <div class="chat_item">
    <div class="chat_item_wrap" :class="{self: chatitem.user.username==currentuser.username}">
      <img :src="chatitem.user.headimg" alt />
      <span class="chat_username">{{chatitem.user.username}}</span>
      <span class="chat_content">{{chatitem.chatcontent}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["chatitem", "currentuser"]
};
</script>
<style scoped>
.chat_item {
  margin: 10px;
}

.chat_item img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.chat_username {
  font-size: 18px;
  margin: 0 10px;
  color: pink;
}

.chat_content {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 10px;
}


.chat_item_wrap {
    display: flex;
}

.self {
    flex-direction: row-reverse;
}
</style>
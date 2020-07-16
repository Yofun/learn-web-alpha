<template>
  <div id="app">
    <div class="content">
      <chat-com :currentuser="currentUser"></chat-com>
      <userlist-com :userlist="userlist" @chooseuser="onUserChoose"></userlist-com>
    </div>
  </div>
</template>

<script>
import chatCom from "./components/chatcom";
import userlistCom from "./components/userlistcom";
export default {
  name: "App",
  components: {
    chatCom,
    userlistCom
  },
  data() {
    return {
      msg: "老陈聊天",
      userlist: [
        {
          username: "小明",
          headimg:
            "http://img5.imgtn.bdimg.com/it/u=2714447129,2168677930&fm=26&gp=0.jpg"
        },
        {
          username: "小红",
          headimg:
            "http://b-ssl.duitang.com/uploads/item/201806/01/20180601112640_kqitp.jpg"
        },
        {
          username: "小张",
          headimg:
            "http://b-ssl.duitang.com/uploads/item/201412/09/20141209232214_yVAET.jpeg"
        },
        {
          username: "小李",
          headimg:
            "http://b-ssl.duitang.com/uploads/item/201603/26/20160326105821_2j3tL.jpeg"
        },
        {
          username: "小赵",
          headimg:
            "http://b-ssl.duitang.com/uploads/item/201512/05/20151205175311_ecVKZ.jpeg"
        },
        {
          username: "小孙",
          headimg:
            "http://b-ssl.duitang.com/uploads/item/201504/26/201504264222_jvVmf.jpeg"
        }
      ],
      currentUser: {
          username: "小明",
          headimg:
            "http://img5.imgtn.bdimg.com/it/u=2714447129,2168677930&fm=26&gp=0.jpg"
        }
    };
  },
  methods: {
    onUserChoose: function(user) {
      this.currentUser = user;
    }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  vertical-align: middle;
  width: 100%;
}

.content {
  display: flex;
  width: 800px;
  height: 700px;
  margin: 50px auto;
  border: 1px solid #ccc;
}
</style>

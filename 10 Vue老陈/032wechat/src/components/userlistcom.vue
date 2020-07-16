<template>
  <div class="userlist">
    <h1>用户列表</h1>
    <ul>
      <li v-for="(item, index) in users" :key="index" @click="chooseUser(index)">
        <img :src="item.headimg" :alt="item.username" />
        <h3>{{item.username}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: this.userlist
    };
  },
  props: ["userlist"],
  methods: {
    chooseUser: function(index) {
      this.$emit("chooseuser", this.users[index]);
    }
  }
};
</script>

<style scoped>
.userlist {
  width: 300px;
  height: 700px;
  background-color: pink;
}

.userlist li {
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;
  padding: 0 10px;
}

.userlist li img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.userlist li h3 {
  flex: 1;
  margin-left: 10px;
}
</style>
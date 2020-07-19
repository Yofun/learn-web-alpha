<template>
  <div class="home">
    <!-- 搜索框 -->
    <van-search v-model="searchValue" placeholder="商品搜索 工239万款好物" input-align="center" />
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" height="200" indicator-color="#333">
      <van-swipe-item v-for="(item, index) in banners" :key="index">
        <img v-lazy="item.image_url" class="banner_img" />
      </van-swipe-item>
    </van-swipe>
    <!-- 菜单 -->
    <van-grid column-num="5" v-if="data.channel" :border="false">
      <van-grid-item
        v-for="(item, index) in data.channel"
        :key="index"
        :icon="item.icon_url"
        :text="item.name"
      />
    </van-grid>

    <!-- 品牌制造商供应 -->
    <van-panel title="品牌制造商供应">
      <div class="brand">
        <van-grid :border="false" :column-num="2">
          <van-grid-item v-for="(item,index) in data.brandList" :key="index">
            <van-image lazy-load :src="item.new_pic_url" />
            <h4 class="brand_title">{{item.name}}</h4>
            <span class="brand_price">{{item.floor_price}}元起</span>
          </van-grid-item>
        </van-grid>
      </div>
    </van-panel>

    <!-- 新品首发 -->
    <van-panel title="周一周四新品首发">
      <div class="newpro">
        <van-grid :border="false" :column-num="2">
          <van-grid-item v-for="(item,index) in data.newGoodsList" :key="index">
            <van-image lazy-load :src="item.list_pic_url" />
            <h4 class="newpro_title">{{item.name}}</h4>
            <span class="newpro_price">{{item.retail_price}}</span>
          </van-grid-item>
        </van-grid>
      </div>
    </van-panel>
  </div>
</template>

<script>
// @ is an alias to /src
// util
import http from "@/utils/http-service.js";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      searchValue: "",
      data: {}
    };
  },
  computed: {
    banners: function() {
      if (this.data.banner && this.data.banner instanceof Array) {
        return this.data.banner;
      }
      return [];
    }
  },
  mounted() {
    http.getIndex().then(res => {
      this.data = res;
      console.log(this.data);
    });
  }
};
</script>


<style>
.banner_img {
  width: 100%;
}

.brand .van-grid-item__content {
  padding: 1px;
}

.brand .brand_title {
  position: absolute;
  top: 20px;
  left: 10px;
  margin: 0;
}

.brand .brand_price {
  position: absolute;
  top: 40px;
  left: 10px;
}

.newpro .van-grid-item__content {
  padding: 0px;
}

.newpro .newpro_title{
  margin: 0;
  margin-bottom: 5px;
}

.newpro .newpro_price{
  color: red;
}


</style>

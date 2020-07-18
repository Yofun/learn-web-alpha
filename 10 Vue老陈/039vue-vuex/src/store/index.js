import Vue from 'vue'
import Vuex from 'vuex'

import http from '@/common/http/request.js';

Vue.use(Vuex)

// module

const user = {
  // 命名空间
  namespaced: true,
  state: {
    name: '张学友',
    age: 20
  },
  getters: {
    subName(state) {
      return state.name + '是歌神';
    }
  },
  mutations: {
    setName: function (state, val) {
      state.name = val;
    },
    setAge: function (state) {
      state.age++;
    }
  },
  actions: {}
};





export default new Vuex.Store({
  state: {
    num: 100,
    msg: 'hello vue!',
    name: '刘德华',
    age: 18,
    banners: []
  },
  getters: {
    nameReverse(state) {
      return state.name.split('').reverse().join('');
    },
    // 传参
    msgAdd(state) {
      return function (val) {
        state.msg = val;
      }
    }
  },
  mutations: {
    addNum(state) {
      state.num++;
    },
    setName(state, val) {
      state.name = val;
    },
    setAge: function (state) {
      state.age++;
    },
    setBanners(state, val) {
      state.banners = val;
    }
  },
  actions: {
    // 获取异步任务
    getBanner({ commit }, params) {
      console.log('store中actions参数', params);
      return new Promise((resolve, reject) => {
        http.get('/banners')
          .then(response => {
            console.log(response);
            if (response.status == 200) {
              // 将获取的内容存储到state中
              let arr = response.data.data;
              commit('setBanners', arr);
              resolve(response.data);
            } else {
              reject(response.status);
            }
          })
          .catch(error => {
            reject(error);
          })
      });
    }
  },
  modules: {
    user
  }
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      name: '刘德华',
      age: 18
    },
    // 多余的字段并不会被保存
    info:{
      name: '张学友',
      age: 20
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // beforeEnter: (to, from, next) => {
    //   // ...
    //   console.log('进入about页面>>>>beforeEnter');
    // }
  },
  {
    path:'/transition',
    name: 'trasition',
    component: ()=>import('@/views/Transition.vue'),
    children:[
      {
        path: 'transition01',
        name: 'Transition01',
        component: ()=>import('@/views/transition/TransitionView01.vue')
      },
      {
        path: 'transition02',
        name: 'Transition02',
        component: ()=>import('@/views/transition/TransitionView02.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    // 滚动
    console.log('触发了scrollBehavior');
  }
})

// 1. 路由跳转之前的事件监听
router.beforeEach(function (to, from, next) {
  console.log('======beforeEach start======');
  console.log(to, from);
  // next();
  let isLogin = true;
  (isLogin || to.name == 'login') ? next() : next({
    name: 'login'
  });

  console.log('======beforeEach end======');
});


// 2. 路由跳转之后的事件监听
router.afterEach(function() {
  console.log('======afterEach======');
})



export default router

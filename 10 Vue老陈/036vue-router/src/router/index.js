import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import news from '@/views/newsCom.vue';
import newsImage from '@/views/news/newsImage.vue';
import newsContent from '@/views/news/newsContent.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/me',
    name: 'Me',
    component: () => import('../views/Me.vue')
  },
  // 嵌套路由
  {
    path: '/news',
    name: 'news',
    component: news,
    children: [
      {
        path: 'image',
        name: 'image',
        component: newsImage
      },
      {
        path: 'content',
        name: 'content',
        component: newsContent
      }
    ]
  },
  {
    path: '/jump',
    component: () => import('../views/Jump.vue')
  },
  // 命名视图
  {
    path: '/name-router',
    component: () => import('../views/nameRouter.vue'),
    children: [
      {
        path: '',
        components: {
          default: () => import('@/views/name_router/main.vue'),
          daohang: () => import('@/views/name_router/nav.vue'),
          cebian: () => import('@/views/name_router/aside.vue')
        }
      }
    ]
  },
  // 重定向
  {
    path: '/a',
    redirect: '/about'
  },
  {
    path: '/redirect',
    component: ()=> import('@/views/redirect.vue')
  },
  // 404页面
  {
    path: '*',
    component: ()=>import('@/views/page404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

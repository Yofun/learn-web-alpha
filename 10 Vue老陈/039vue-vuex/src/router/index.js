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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/state',
    component: ()=>import('@/views/State.vue')
  },
  {
    path: '/getter',
    component:()=>import('@/views/Getter.vue')
  },
  {
    path: '/action',
    component: ()=>import('@/views/Action.vue')
  },
  {
    path: '/module',
    component: ()=>import('@/views/Module.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

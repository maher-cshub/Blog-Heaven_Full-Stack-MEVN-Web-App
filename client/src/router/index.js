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
    path: '/posts/see/:post_id',
    name: 'seepost',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SeePost.vue')
  },
  {
    path: '/posts/create',
    name:'createpost',
    component: () => import('../views/CreatePost.vue')
  },

  {
    path: '/posts/update/:post_id',
    name:'updatepost',
    component: () => import('../views/UpdatePost.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

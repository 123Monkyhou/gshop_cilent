import Vue from 'vue'
import VueRouter from 'vue-router'
import LOGIN from '../pages/LOGIN'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LOGIN',
    component: LOGIN
  },
 
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

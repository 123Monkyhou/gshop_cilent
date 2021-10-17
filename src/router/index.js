import Vue from 'vue'
import VueRouter from 'vue-router'
import routes  from '@/router/routers'



Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import LOGIN from '@/pages/LOGIN'
// Vue.use(VueRouter)

// const routes = [
//   { path: '/', component: '/LOGIN' },
//   { path: '/home', component: Home }
// ]

// const router = new VueRouter({
//   routes
// })

// export default router

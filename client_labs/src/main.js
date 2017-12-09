import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'

import App from './App'
import Dashboard from './pages/Dashboard'

Vue.config.productionTip = false

window.axios = axios

Vue.use(VueRouter)

const routes = [
  {path: '/', component: App, name: 'home'},
  {path: '/dashboard', component: Dashboard, name: 'dashboard', meta: {requiresAuth: true}},
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    if (authUser && authUser.access_token) {
      next()
    } else {
      next({name: 'home'})
    }
  }
  next()
})


new Vue({
  router,
}).$mount("#app")

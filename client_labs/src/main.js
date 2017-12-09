import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

import App from './App'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

Vue.config.productionTip = false

require('./bootstrap');

Vue.component('app', App)

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Login, name: 'home'},
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
  store,
}).$mount("#app")

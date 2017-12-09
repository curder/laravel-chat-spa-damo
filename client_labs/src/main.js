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
  {path: '/dashboard', component: Dashboard, name: 'dashboard'},
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  router,
}).$mount("#app")

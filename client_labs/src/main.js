import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

window.axios = axios

Vue.use(VueRouter)

const routes = [
  {path: '/', component: App, name: 'home'},
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  router,
}).$mount("#app")

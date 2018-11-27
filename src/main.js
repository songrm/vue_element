// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

// import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import Vuex from 'vuex'
import './power' // 权限
import store from './store/index'
import 'jquery'
import fullcalendar from 'vue-fullcalendar'

import VueResource from 'vue-resource'
Vue.use(VueResource)

// Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.use(fullcalendar)
Vue.prototype.$axios = axios
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})

import Vue from 'vue'
import Vuex from 'vuex'

// import axios from 'axios'

import sidebar from './sidebar'
import longin_info from './user'

import getters from './getters'
Vue.use(Vuex)

// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/59fffc51ab1a494a37b36d3f/';

const store = new Vuex.Store({

  modules: {
    sidebar,
    longin_info

  },
  getters

})

export default store

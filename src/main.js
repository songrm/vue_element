import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";

// import Cookies from 'js-cookie'
import Element from "element-ui";
import "./assets/element-variables.scss";

Vue.use(Element);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

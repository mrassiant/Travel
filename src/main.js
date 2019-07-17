import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAwesomeSwiper from "vue-awesome-swiper";
import axios from "axios";

import "./assets/style/base.css";
import "./assets/style/iconfont.css";
import "swiper/dist/css/swiper.css";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

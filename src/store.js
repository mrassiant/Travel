import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let defaultCity = "深圳";
try {
  if (localStorage.city) {
    defaultCity = localStorage.city;
  }
} catch (e) {
  throw new Error("浏览器不支持localStorage");
}

export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  mutations: {
    changeCity(state, city) {
      state.city = city;
      try {
        localStorage.city = city;
      } catch (e) {
        throw new Error("浏览器不支持localStorage");
      }
    }
  },
  actions: {
    changeCity(ctx, city) {
      ctx.commit("changeCity", city);
    }
  }
});

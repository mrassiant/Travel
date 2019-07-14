import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import City from "./views/City.vue";
import Detail from "./views/Detail.vue";
import ListImg from "./views/ListImg.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/city",
      name: "city",
      component: City
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: Detail
    },
    {
      path: "/listImg/:id",
      name: "listImg",
      component: ListImg
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

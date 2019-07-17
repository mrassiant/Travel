import Vue from "vue";
import Router from "vue-router";
//import Home from "./views/Home.vue";
//import City from "./views/City.vue";
//import Detail from "./views/Detail.vue";
//import ListImg from "./views/ListImg.vue";

Vue.use(Router);

let scrollBehavior = function(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { x: 0, y: 0 };
  }
};

export default new Router({
  mode: "history",
  scrollBehavior,
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        keepAlive: true
      },
      component: () => import("./views/Home.vue")
    },
    {
      path: "/city",
      name: "city",
      meta: {
        keepAlive: true
      },
      component: () => import("./views/City.vue")
    },
    {
      path: "/detail/:id",
      name: "detail",
      meta: {
        keepAlive: true
      },
      component: () => import("./views/Detail.vue")
    }
  ]
});

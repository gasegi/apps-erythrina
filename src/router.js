import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";

// GAS は非同期は無理
// const About = import(/* webpackChunkName: "about" */ "./views/About.vue");

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", component: Home, alias: "/home" },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/add",
      name: "add",
      component: About
    }
  ]
});

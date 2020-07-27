import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Example from "../views/Example.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/example",
    name: "Example",
    component: Example
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

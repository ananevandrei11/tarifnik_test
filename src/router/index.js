import Vue from "vue";
import VueRouter from "vue-router";
import Tarifs from "../views/Tarifs.vue";
import Order from "../views/Order.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Tarifs",
    component: Tarifs
  },
  {
    path: "/order",
    name: "Order",
    component: Order
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/photos",
      name: "Photos",
      component: () => import("../views/PhotosView.vue"),
    },
    {
      path: "/products",
      name: "Products",
      component: () => import("../views/ProductsView.vue"),
    },
    {
      path: "/shopping-cart",
      name: "My shopping cart",
      component: () => import("../views/ShoppingCartView.vue"),
    },
    {
      path: "/persons-list",
      name: "Person list",
      component: () => import("../views/PersonsListView.vue"),
    },
  ],
});

export default router;

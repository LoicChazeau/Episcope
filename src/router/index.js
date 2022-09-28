import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CollectionView from "../views/CollectionView.vue";
import DrawView from "../views/DrawView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/collection",
    name: "collection",
    component: CollectionView,
  },
  {
    path: "/tirage",
    name: "tirage",
    component: DrawView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

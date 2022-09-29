import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CollectionView from "../views/CollectionView.vue";
import DrawView from "../views/DrawView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";

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
  {
    path: "/connexion",
    name: "connexion",
    component: LoginView,
  },
  {
    path: "/inscription",
    name: "inscription",
    component: RegisterView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

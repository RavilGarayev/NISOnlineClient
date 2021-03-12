import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import List from "../views/List.vue";
import Task from "../views/Task.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/list",
    name: "list",
    component: List,
  },
  {
    path: "/task",
    name: "task",
    component: Task,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

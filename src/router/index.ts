import { createRouter, createWebHistory } from "vue-router";
import Hello from "../components/Splash.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Hello,
    },
  ],
});
export default router;

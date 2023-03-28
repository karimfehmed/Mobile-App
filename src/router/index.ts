import { createRouter, createWebHistory } from "vue-router";
import Splash from "../components/Splash.vue";
import Signup from "../components/SignUp.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Splash,
    },
    {
      path: "/signup",
      component: Signup,
    },
  ],
});
export default router;

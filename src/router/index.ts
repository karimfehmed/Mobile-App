import { createRouter, createWebHistory } from "vue-router";
import Splash from "../components/Splash.vue";
import Signup from "../components/SignUp.vue";
import PersonalInfo from "..//components/PersonalInfo.vue";
import FamilyDetails from "..//components/FamilyDetails.vue";
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
    {
      path: "/PersonalInfo",
      component: PersonalInfo,
    },
    {
      path: "/familydetails",
      component: FamilyDetails,
    },
  ],
});
export default router;

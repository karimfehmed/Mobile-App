import { createRouter, createWebHistory } from "vue-router";
import Splash from "../components/Splash.vue";
import Signup from "../components/SignUp.vue";
import PersonalInfo from "../components/PersonalInfo.vue";
import FamilyDetails from "../components/FamilyDetails.vue";
import NewUser from "../components/NewUser.vue";
import BottomNavbar from "../components/BottomNavbar.vue";
import Dentist from "../components/Dentist.vue";
import Generalphysician from "../components/Generalphysician.vue";
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
      name: "PersonalInfo",
      component: PersonalInfo,
    },
    {
      path: "/familydetails",
      component: FamilyDetails,
      name: "familyDetails",
    },
    {
      path: "/newuser",
      name: "newuser",
      components: {
        default: NewUser,
        BottomNavbar: BottomNavbar,
      },
    },
    {
      path: "/dentist",
      name: "dentist",
      component: Dentist,
    },
    {
      path: "/generalphysician",
      name: "generalphysician",
      component: Generalphysician,
    },
  ],
});
export default router;

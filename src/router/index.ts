import { createRouter, createWebHistory } from "vue-router";
import Splash from "../components/Splash.vue";
import Signup from "../components/SignUp.vue";
import PersonalInfo from "../components/PersonalInfo.vue";
import FamilyDetails from "../components/FamilyDetails.vue";
import NewUser from "../components/NewUser.vue";
import BottomNavbar from "../components/BottomNavbar.vue";
import Dentist from "../components/Dentist.vue";
import Generalphysician from "../components/Generalphysician.vue";
import Nutrition from "../components/Nutrition.vue";
import Neurologist from "../components/Neurologist.vue";
import Opthal from "../components/Opthal.vue";
import Pediatic from "../components/Pediatic.vue";
import Allappoiments from "../components/Allappoiments.vue";
// import AppoimentPopup from "../components/AppoimentPopup.vue";
import CancelReason from "../components/CancelReason.vue";
import RescheduleAppointment from "../components/RescheduleAppointment.vue";
import RescheduleDatetime from "../components/RescheduleDatetime.vue";
import BookAgain from "../components/BookAgain.vue";
import SignIn from "../components/SignIn.vue";
import Messages from "../components/Messages.vue";
import Inbox from "../components/Inbox.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Splash,
      meta: { auth: false },
    },
    {
      path: "/signup",
      name: "SignUp",
      component: Signup,
      meta: { auth: false },
    },
    {
      path: "/PersonalInfo",
      name: "PersonalInfo",
      component: PersonalInfo,
      meta: { auth: true },
    },
    {
      path: "/familydetails",
      component: FamilyDetails,
      name: "familyDetails",
      meta: { auth: true },
    },
    {
      path: "/newuser",
      name: "newuser",
      meta: { auth: true },

      components: {
        default: NewUser,
        BottomNavbar: BottomNavbar,
      },
    },
    {
      path: "/dentist",
      name: "dentist",
      component: Dentist,
      meta: { auth: true },
    },
    {
      path: "/generalphysician",
      name: "generalphysician",
      component: Generalphysician,
      meta: { auth: true },
    },
    {
      path: "/nutrition",
      name: "nutrition",
      component: Nutrition,
      meta: { auth: true },
    },
    {
      path: "/neurologist",
      name: "neurologist",
      component: Neurologist,
      meta: { auth: true },
    },
    {
      path: "/opthal",
      name: "opthal",
      component: Opthal,
      meta: { auth: true },
    },
    {
      path: "/pediatic",
      name: "pediatic",
      component: Pediatic,
      meta: { auth: true },
    },
    {
      path: "/allappoiments",
      name: "allappoiments ",
      component: Allappoiments,
      meta: { auth: true },
    },
    {
      path: "/cancelappoiments/:id",
      name: "cancelreason",
      component: CancelReason,
      meta: { auth: true },
    },
    {
      path: "/rescheduleappointment/:id",
      name: "rescheduleappointment",
      component: RescheduleAppointment,
      meta: { auth: true },
    },
    {
      path: "/rescheduledatetime/:id",
      name: "rescheduledatetime",
      component: RescheduleDatetime,
      meta: { auth: true },
    },
    {
      path: "/bookagain",
      name: "bookagain",
      component: BookAgain,
      meta: { auth: true },
    },
    {
      path: "/signin",
      name: "Signin",
      component: SignIn,
      meta: { auth: false },
    },
    {
      path: "/messages/:id",
      name: "Messages",
      component: Messages,
      meta: { auth: false },
    },
    {
      path: "/inbox",
      name: "Inbox",
      component: Inbox,
      meta: { auth: false },
    },
  ],
});
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.auth);
  const auth = getAuth();
  const user = await new Promise((resolve) => {
    onAuthStateChanged(auth, resolve);
  });
  const isAuthenticated = !!user;
  if (requiresAuth && !isAuthenticated) {
    next("/signin");
  } else if (isAuthenticated && to.name === "Signin") {
    next("/newuser");
  } else if (isAuthenticated && requiresAuth) {
    next();
  } else if (!isAuthenticated && requiresAuth) {
    next("/signin");
  } else {
    next();
  }
});
export default router;

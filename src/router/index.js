import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/Home.vue";
import Button from "../pages/Button.vue";
import Card from "../pages/Card.vue";
import Input from "../pages/FormElements.vue";
import Accordion from "../pages/Accordion.vue";
import AdvanceForms from "../pages/AdvanceForms.vue";
import Overlays from "../pages/Overlays.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/button",
      name: "button",
      component: Button,
    },
    {
      path: "/card",
      name: "card",
      component: Card,
    },
    {
      path: "/form-elements",
      name: "form-elements",
      component: Input,
    },
    {
      path: "/accordion",
      name: "accordion",
      component: Accordion,
    },
    {
      path: "/advance-forms",
      name: "advance-forms",
      component: AdvanceForms,
    },
    {
      path: "/overlays",
      name: "overlays",
      component: Overlays,
    },
  ],
});

// router.afterEach((to, from, failure) => {
//   if (!failure) {
//     setTimeout(() => {
//       window.HSStaticMethods.autoInit();
//     }, 100);
//   }
// });

router.afterEach(async (to, from, failure) => {
  if (!failure) setTimeout(() => window.HSStaticMethods.autoInit(), 100);
});

export default router;

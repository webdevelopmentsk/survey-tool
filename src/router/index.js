import { createRouter, createWebHistory } from "vue-router"
import DesignOne from  "../views/DesignOne.vue"
import DesignTwo from  "../views/DesignTwo.vue"

const routes = [
  {
    path: "/",
    name: "DesignOne",
    component: DesignOne,
  },
  {
    path: "/design-two",
    name: "DesignTwo",
    component: DesignTwo,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

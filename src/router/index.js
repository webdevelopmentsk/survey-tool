import { createRouter, createWebHistory } from "vue-router"
import DesignOne from  "../views/DesignOne.vue"
import DesignTwo from  "../views/DesignTwo.vue"
import DesignThree from  "../views/DesignThree.vue"

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
  },
  {
    path: "/design-three",
    name: "DesignThree",
    component: DesignThree,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

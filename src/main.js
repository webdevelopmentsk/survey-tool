import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { globalComponent } from "@/registerGlobalComponents"

library.add(fas)

export const app = createApp(App);

app.use(store).use(router).use(globalComponent).component('fa', FontAwesomeIcon);

router.isReady().then(() => {
  app.mount("#app");
});

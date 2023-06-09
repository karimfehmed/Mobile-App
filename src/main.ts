import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "../src/router/index";
import "..//src/assets/scss/main.css";
import store from "./store/store";

loadFonts();

createApp(App).use(store).use(vuetify).use(router).mount("#app");

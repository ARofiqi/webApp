import { createApp } from "vue";
import router from "./router";
import "./style.css";
import App from "./App.vue";
import "./tailwind.css";

createApp(App).use(router).mount("#app");

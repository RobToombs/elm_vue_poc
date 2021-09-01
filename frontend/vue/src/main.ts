import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// @ts-ignore
import BalmUI from "balm-ui"; // Official Google Material Components
// @ts-ignore
import BalmUIPlus from "balm-ui-plus"; // BalmJS Team Material Components
import "balm-ui-css";

createApp(App).use(router).use(BalmUI).use(BalmUIPlus).mount("#app");

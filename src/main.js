import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import BaseRouteLink from "./components/base/BaseRouteLink.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("BaseRouteLink", BaseRouteLink);

app.mount("#app");

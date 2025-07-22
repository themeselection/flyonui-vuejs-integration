import { createApp } from "vue";
import "./index.css";

import "flyonui/flyonui";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");

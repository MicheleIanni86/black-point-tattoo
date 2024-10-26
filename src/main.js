import { createApp } from "vue";
import "./style/style.css";
import "./style/variables.css";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.vue";

const app = createApp(App);

app.mount("#app");

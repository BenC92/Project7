import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAxios from './plugins/axios'

Vue.use(VueAxios)

const app = createApp(App);
app.use(store);

app.use(router).mount("#app");

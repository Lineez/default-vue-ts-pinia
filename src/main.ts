import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "@/App.vue";
import router from "@/router/index";

// APP
const app = createApp(App);

// STORE
const pinia = createPinia();
// // global store prop
// function SecretPiniaPlugin() {
//     return { secret: "the cake is a lie" };
// }
// pinia.use(SecretPiniaPlugin);

// // in another file
// const store = useStore()
// store.secret // 'the cake is a lie'

app.use(router).use(pinia).mount("#app");

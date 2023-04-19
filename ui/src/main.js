import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router";
import StartPage from "@/components/StartPage";
import api from "@/plugins/api";
import SuccessPage from "@/components/SuccessPage";
import NotFoundPage from "@/components/NotFoundPage";

const app = createApp(App);

const routes = [
    { path: '/', name: "StartPage", component:  StartPage},
    { path: '/success/:msg', name: "SuccessPage", component:  SuccessPage},
    { path: '/notfound/:msg', name: "NotFoundPage", component:  NotFoundPage}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

app.use(router);
app.use(api);

app.component("start-page", StartPage);

app.mount("#app");
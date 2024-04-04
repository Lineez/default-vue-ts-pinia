import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import useLoaderState from "@/store/modules/loader";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/HomePage.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/pages/AboutPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  const isLoading = useLoaderState();
  const { changeStateTrue } = isLoading;
  changeStateTrue();

  // const token = getToken();
  // // не залогинен
  // if (!token && to.name !== "Login") {
  //   return { name: "Login" };
  // }
  // // залогинен, но зашел на форму логина или повторно вошел, до того как токен протух
  // else if (token && to.name === "Login") {
  //   return { name: "Menu" };
  // }
  // // остальные маршруты
  // else {
  //   return true;
  // }
});

router.afterEach(() => {
  const isLoading = useLoaderState();
  const { changeStateFalse } = isLoading;
  // Небольшая задержка, чтобы избежать мерцания при мгновенном переходе между роутами
  const t = setTimeout(() => {
    changeStateFalse();
    clearTimeout(t);
  }, 500);
});

export default router;

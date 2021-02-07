import Vue from "vue";
import VueRouter from "vue-router";

import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    beforeEnter: (to, from, next) => {
      if (store.getters.isAuthenticated) next("/");
      else next();
    }
  },
  {
    path: "/create_account",
    name: "Create Account",
    component: () => import("../views/CreateAccount.vue"),
    beforeEnter: (to, from, next) => {
      if (store.getters.isAuthenticated) next("/");
      else next();
    }
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue")
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  // check for session on every route
  store.dispatch("session");

  // isAuthenticated guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters["isAuthenticated"]) {
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

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
    component: () => import("../views/About.vue"),
    meta: { requiresAuth: true }
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
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
    beforeEnter: (to, from, next) => {
      if (store.getters.isAuthenticated) next("/");
      else next();
    }
  },
  {
    path: "/activate/:uid/:token",
    name: "Activate",
    component: () => import("../views/ActivateAccount.vue")
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
  async function sessionCheck() {
    try {
      await store.dispatch("session");
      if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters["isAuthenticated"]) {
          next("/login");
        } else {
          next();
        }
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
    }
  }

  sessionCheck();
});

export default router;

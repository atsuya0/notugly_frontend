import firebase from "firebase";
import Vue from "vue";
import Router from "vue-router";

import SignUp from "@/components/templates/SignUp.vue";
import SignIn from "@/components/templates/SignIn.vue";
import SignOut from "@/components/templates/SignOut.vue";
import User from "@/components/templates/User.vue";
import Settings from "@/components/templates/Settings.vue";
import Browse from "@/components/templates/Browse.vue";

import store from "./store";
import * as types from "./store/mutation-types";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: "browse"
    },
    {
      path: "/mypage",
      name: "mypage",
      component: User,
      meta: { requiresAuth: true }
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings,
      meta: { requiresAuth: true }
    },
    {
      path: "/browse",
      name: "browse",
      component: Browse,
      meta: { requiresAuth: true }
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp
    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn
    },
    {
      path: "/signout",
      name: "signout",
      component: SignOut,
      meta: { requiresAuth: true }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (!requiresAuth) {
    next();
    return;
  }

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      store.commit(types.AUTH_SIGN, { token: user.ra, uid: user.uid });
      next();
    } else {
      next({
        name: "signin",
        query: { redirect: to.fullPath }
      });
    }
  });
});

export default router;

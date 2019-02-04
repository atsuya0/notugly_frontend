import firebase from "firebase";
import Vue from "vue";
import Router from "vue-router";

import SignUp from "@/components/templates/SignUp.vue";
import SignIn from "@/components/templates/SignIn.vue";
import SignOut from "@/components/templates/SignOut.vue";
import User from "@/components/templates/User.vue";
import Browse from "@/components/templates/Browse.vue";

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
    },
    {
      path: "/mypage",
      name: "mypage",
      component: User,
      meta: { requiresAuth: true }
    },
    {
      path: "/browse",
      name: "browse",
      component: Browse,
      meta: { requiresAuth: true }
    }
  ]
});

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) {
    next("signin");
  }
  next();
});

export default router;

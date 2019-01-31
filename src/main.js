import firebase from "firebase";
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as types from "./store/mutation-types";

Vue.config.productionTip = false;

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: `${process.env.VUE_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://
    ${process.env.VUE_APP_FIREBASE_PROJECT_ID}.firebaseio.com`,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: `${process.env.VUE_APP_FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

Vue.use(Vuetify);

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.commit(types.AUTH_SIGN, { ...store.state.auth, uid: user.uid });
  }
  new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
  });
});

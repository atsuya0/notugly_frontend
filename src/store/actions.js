import firebase from "firebase";

import * as types from "./mutation-types";

export default {
  signUp: async ({ commit }, payload) => {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .catch(err => {
        throw err;
      });

    localStorage.setItem("token", res.user.ra);
    commit(types.AUTH_SIGN, {
      token: res.user.ra,
      uid: res.user.uid
    });

    return res.user.ra;
  },
  signIn: async ({ commit }, payload) => {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .catch(err => {
        throw err;
      });
    localStorage.setItem("token", res.user.ra);
    commit(types.AUTH_SIGN, {
      token: res.user.ra,
      uid: res.user.uid
    });
  },
  signOut: async ({ commit }) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem("token");
        commit(types.AUTH_SIGNOUT);
      })
      .catch(err => {
        throw err;
      });
  }
};

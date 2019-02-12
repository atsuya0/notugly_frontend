import firebase from "firebase";

import * as types from "./mutation-types";

export default {
  signUp: async ({ commit }, payload) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(res => {
        commit(types.AUTH_SIGN, {
          token: res.user.ra,
          uid: res.user.uid
        });
        return res.user.ra;
      })
      .catch(err => {
        throw err;
      });
  },
  signIn: async ({ commit }, payload) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(res => {
        commit(types.AUTH_SIGN, {
          token: res.user.ra,
          uid: res.user.uid
        });
      })
      .catch(err => {
        throw err;
      });
  },
  signOut: async ({ commit }) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        commit(types.AUTH_SIGNOUT);
      })
      .catch(err => {
        throw err;
      });
  }
};

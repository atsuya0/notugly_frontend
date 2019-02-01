import * as types from "./mutation-types";

export default {
  [types.AUTH_SIGN](state, payload) {
    state.auth = payload;
  },
  [types.AUTH_SIGNOUT](state) {
    state.auth = { token: null, uid: null };
  }
};

import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
// import getters from "./getters"
import mutations from "./mutations";

Vue.use(Vuex);

const state = {
  auth: {
    token: localStorage.getItem("token"),
    uid: null
  }
};

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions
});

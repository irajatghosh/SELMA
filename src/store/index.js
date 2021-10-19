import Vue from "vue";
import Vuex from "vuex";

import auth from "./modules/auth/index";
import users from "./modules/users/index";

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  // }
  modules: {
    auth,
    users,
  },
});

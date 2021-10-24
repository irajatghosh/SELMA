import Vue from "vue";
import Vuex from "vuex";

import auth from "./modules/auth/index";
import users from "./modules/users/index";
import exams from "./modules/exams/index";
import registeredexams from "./modules/registeredexams/index";
import grades from "./modules/grades/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    users,
    exams,
    registeredexams,
    grades,
  },
});

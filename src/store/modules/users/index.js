import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";
import { USERS } from "../../../utils/dummy-data";

export default {
  state() {
    return {
      user: USERS,
    };
  },
  mutations,
  actions,
  getters,
};

import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

import { EXAMS } from "../../../utils/dummy-data";

export default {
  state() {
    return {
      exams: EXAMS,
      assignedExams: [],
      participants: [],
    };
  },
  mutations,
  actions,
  getters,
};

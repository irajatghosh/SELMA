import { EXAMS } from "../../../utils/dummy-data";

export default {
  setRegisteredExam(state, payload) {
    state.registeredExams = payload;
  },
  deRegister(state, payload) {
    console.log("in mutation");
    const findExam = EXAMS.filter((x) => {
      const findUser = x.participants.find((p) => p === payload.userId);
      console.log("users found", findUser);
      if (findUser) {
        return x;
      } else {
        console.log("error");
      }
    });

    console.log("in mutation data", findExam);
    state.registeredExams = findExam;
  },
};

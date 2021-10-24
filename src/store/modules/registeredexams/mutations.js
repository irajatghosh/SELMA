import { EXAMS } from "../../../utils/dummy-data";

export default {
  setRegisteredExam(state, payload) {
    state.registeredExams = payload;
  },
  deRegister(state, payload) {
    const findExam = EXAMS.filter((x) => {
      const findUser = x.participants.find((p) => p === payload.userId);

      if (findUser) {
        return x;
      } else {
        console.log("error");
      }
    });

    state.registeredExams = findExam;
  },
};

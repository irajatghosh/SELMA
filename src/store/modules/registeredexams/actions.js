import { EXAMS } from "../../../utils/dummy-data";

export default {
  setRegisteredExam(context, payload) {
    const findExam = EXAMS.filter((x) => {
      const findUser = x.participants.find((p) => p === payload.userId);

      if (findUser) {
        return x;
      } else {
        console.log("error");
      }
    });

    context.commit("setRegisteredExam", findExam);
  },

  deRegister(context, payload) {
    const { examId, userId } = payload;
    const updatedData = EXAMS.filter((x) => {
      if (x.id === payload.examId) {
        const findUser = x.participants.find((p) => p === payload.userId);
        if (findUser) {
          const updatedUser = x.participants.filter(
            (f) => f !== payload.userId
          );

          x.participants = updatedUser;
        }
      }
      return x;
    });

    console.log("deregistered update", updatedData);

    context.commit("deRegister", { examId, userId });
  },
};

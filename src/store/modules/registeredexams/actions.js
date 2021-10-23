import { EXAMS } from "../../../utils/dummy-data";

export default {
  setRegisteredExam(context, payload) {
    console.log("action os registered exam", payload.userId);
    const findExam = EXAMS.filter((x) => {
      const findUser = x.participants.find((p) => p === payload.userId);
      console.log("users found", findUser);
      if (findUser) {
        return x;
      } else {
        console.log("error");
      }
    });

    console.log("s2 data", findExam);

    context.commit("setRegisteredExam", findExam);
  },

  deRegister(context, payload) {
    //const { userId } = payload.userId;
    const { examId, userId } = payload;
    const updatedData = EXAMS.filter((x) => {
      if (x.id === payload.examId) {
        const findUser = x.participants.find((p) => p === payload.userId);
        if (findUser) {
          // const error = new Error("You have already registered for this exam.");
          // console.log(error);
          // throw error;
          const updatedUser = x.participants.filter(
            (f) => f !== payload.userId
          );
          console.log("updated user", updatedUser);
          x.participants = updatedUser;
        }
      }
      return x;
    });

    console.log("deregistered update", updatedData);

    context.commit("deRegister", { examId, userId });
  },
};

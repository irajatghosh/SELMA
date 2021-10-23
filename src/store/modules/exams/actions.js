import { v4 as uuidv4 } from "uuid";
import { EXAMS } from "../../../utils/dummy-data";
import { USERS } from "../../../utils/dummy-data";
export default {
  addExams(context, payload) {
    const examDetails = {
      id: uuidv4(),
      subject: payload.subject,
      date: payload.date,
      time: payload.time,
      professor: payload.professor,
      participants: [],
    };
    console.log("action exam data", examDetails);
    // USERS.push(userData);
    context.commit("addExams", examDetails);
  },
  updateExams(context, payload) {
    const foundIndex = EXAMS.findIndex((item) => item.id === payload.id);

    context.commit("updateExams", { payload, foundIndex });
  },
  deleteExam(context, payload) {
    const foundIndex = EXAMS.findIndex((item) => item.id === payload);

    context.commit("deleteExam", foundIndex);
  },

  registerExam(context, payload) {
    console.log("user id in registration", payload.userId, payload.examId);

    const findExam = EXAMS.find((e) => e.id === payload.examId);
    console.log("found exam", findExam);

    //const updatedArr = EXAMS.map((item) => item.id === payload.examId);
    const updatedData = EXAMS.filter((x) => {
      if (x.id === payload.examId) {
        const findUser = x.participants.find((p) => p === payload.userId);
        if (findUser) {
          const error = new Error("You have already registered for this exam.");

          throw error;
        } else {
          x.participants.push(payload.userId);
        }
      }
      return x;
    });
    console.log("updated array", updatedData);
    context.commit("registerExam", updatedData);
  },

  viewRegisteredExam(context, payload) {
    const findExam = EXAMS.map((x) => {
      const findUser = x.participants.find((p) => p === payload.userId);
      if (!findUser) {
        const error = new Error("You have no exam registered");

        throw error;
      }

      return x;
    });

    context.commit("getRegisteredExam", findExam);
  },
  viewAssignedExams(context, payload) {
    console.log("professor id", payload);
    const findExam = EXAMS.filter((x) => {
      if (x.professor === payload) {
        return x;
      }
    });
    console.log("in action", findExam);

    context.commit("setAssignedExam", findExam);
  },
  findSubjectRegisteredParticipants(context, payload) {
    const filteredUsers = USERS.filter((user) => {
      if (payload.participants.includes(user.id)) {
        return user;
      }
    });
    const modifiedUsers = filteredUsers.map((m) => ({
      ...m,
      status: "Not Evaluated",
      examId: payload.id,
    }));
    console.log("in action modifier", modifiedUsers);
    console.log("in action", filteredUsers);
    context.commit("setParticipants", modifiedUsers);
  },

  updateParticipantListAfterEvaluation(context, payload) {
    const { foundIndex, data } = payload;
    context.commit("updateParticipantsArray", { foundIndex, data });
  },

  // console.log("student data after search", participantData);
};

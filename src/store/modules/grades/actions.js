import { v4 as uuidv4 } from "uuid";
//import { RESULTS } from "../../../utils/dummy-data";
export default {
  addGrade(context, payload) {
    const gradeData = {
      ...payload,
      id: uuidv4(),
      studentId: payload.id,
      examId: payload.examId,
      //   name: payload.fullname,
      subject: payload.subject,
      grade: payload.grade,
    };
    // RESULTS.push(gradeData);
    context.commit("setResults", gradeData);
  },
  searchGrade(context, payload) {
    const resultData = context.rootGetters.getResults;
    console.log("root getters", resultData);
    console.log("userid", payload);
    const filteredUsers = resultData.filter((user) => {
      if (user.studentId === payload) {
        return user;
      }
    });

    console.log("found result", filteredUsers);
    context.commit("setSearchedGrade", filteredUsers);
  },
};

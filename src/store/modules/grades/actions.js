import { v4 as uuidv4 } from "uuid";
export default {
  addGrade(context, payload) {
    const gradeData = {
      ...payload,
      id: uuidv4(),
      sudentId: payload.id,
      examId: payload.examId,
      //   name: payload.fullname,
      subject: payload.subject,
      grade: payload.grade,
    };
    console.log("results", gradeData);
    context.commit("setResults", gradeData);
  },
};

export default {
  addExams(state, payload) {
    state.exams.push(payload);
  },
  updateExams(state, payload) {
    console.log("in mutations", payload.foundIndex, payload.payload);
    state.exams.splice(payload.foundIndex, 1, payload.payload);
  },
  deleteExam(state, payload) {
    console.log("delete in mutation", payload);
    state.exams.splice(payload, 1);
  },
  registerExam(state, payload) {
    console.log("mutation payload", payload);
    state.exams = payload.updatedData;
  },
  setAssignedExam(state, payload) {
    state.assignedExams = payload;
  },
  setParticipants(state, payload) {
    state.participants = payload;
  },
};

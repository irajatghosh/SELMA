export default {
  getUsers(state) {
    return state.user;
  },
  getProfessors(state) {
    return state.user.filter((p) => p.role === "Professor");
  },
};

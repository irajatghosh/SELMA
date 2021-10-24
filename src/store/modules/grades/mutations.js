export default {
  setResults(state, payload) {
    state.results.push(payload);
  },
  setSearchedGrade(state, payload) {
    state.singleResult = payload;
  },
};

export default {
  setResults(state, payload) {
    console.log("in mutation", payload);
    state.results.push(payload);
  },
};

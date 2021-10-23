export default {
  setUser(state, payload) {
    state.user = payload;
  },
  logout(state) {
    state.user = [];
  },
};

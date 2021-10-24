export default {
  setUser(state, payload) {
    state.user = payload;
    state.token = "token";
  },
  logout(state) {
    state.user = [];
    state.token = "";
  },
};

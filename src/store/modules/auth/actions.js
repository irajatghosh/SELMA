import { USERS } from "../../../utils/dummy-data";

export default {
  login(context, payload) {
    const { username, password, role } = payload;

    //api call

    if (!username || !password) {
      const error = new Error("Failed to authenticate. Check your login data.");
      throw error;
    }
    const foundUser = USERS.find(
      (user) =>
        user.username === username &&
        user.password === password &&
        user.role === role
    );

    if (!foundUser) {
      const error = new Error("Failed to authenticate. Check your login data.");
      throw error;
    }
    console.log("in action", foundUser);
    context.commit("setUser", foundUser);
  },
};

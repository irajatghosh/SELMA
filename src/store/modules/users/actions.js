//import { USERS } from "../../../utils/dummy-data";
import { v4 as uuidv4 } from "uuid";

export default {
  addUsers(context, payload) {
    const userData = {
      id: uuidv4(),
      firstname: payload.firstname,
      lastname: payload.lastname,
      fullname: payload.firstname + "" + payload.lastname,
      username: payload.username,
      password: payload.password,
      role: payload.role,
    };
    // USERS.push(userData);
    context.commit("addUsers", userData);
  },
};

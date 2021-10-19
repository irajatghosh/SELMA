<template>
  <v-container>
    <v-card width="400" class="mx-auto mt-5 ">
      <v-card-title> Add Account </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <div class="mb-4 text-center">
          <v-radio-group v-model="role" row mandatory>
            <v-radio
              v-for="item in accountOptions"
              :key="item.id"
              :label="item.title"
              :value="item.title"
            ></v-radio>
          </v-radio-group>
        </div>
        <v-form @submit.prevent="createUser">
          <v-text-field outlined dense label="First Name" v-model="firstname" />
          <v-text-field outlined dense label="Last Name" v-model="lastname" />
          <v-text-field outlined dense label="Username" v-model="username" />
          <v-text-field
            outlined
            dense
            :type="showPassword ? 'text' : 'password'"
            label="Set Password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            v-model="password"
          />
          <div v-if="warning">
            Login failed. Please enter correct username and password.
          </div>

          <v-btn
            depressed
            max-width="150"
            class=" mr-4 primary text-capitalize"
            type="submit"
            >Create Account</v-btn
          >

          <v-btn depressed max-width="150" class="  error text-capitalize"
            >Cancel</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false,
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      warning: false,
      role: null,
      accountOptions: [
        { id: "a1", title: "Student" },
        { id: "a2", title: "Professor" },
      ],
    };
  },
  methods: {
    createUser() {
      this.$store.dispatch("addUsers", {
        firstname: this.firstname,
        lastname: this.lastname,
        username: this.username,
        password: this.password,
        role: this.role,
      });
      console.log("adding account", this.$store.getters.getUsers);
    },
  },
};
</script>

<style></style>

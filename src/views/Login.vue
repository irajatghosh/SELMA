<template>
  <v-container>
    <v-card width="400" class="mx-auto mt-5 ">
      <v-card-title> Login </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <div class="mb-4 text-center">
          <v-radio-group v-model="role" row mandatory>
            <v-radio
              v-for="item in loginOptions"
              :key="item.id"
              :label="item.title"
              :value="item.title"
            ></v-radio>
          </v-radio-group>
        </div>
        <v-form @submit.prevent="login">
          <v-text-field
            outlined
            dense
            label="Username"
            prepend-icon="mdi-account-circle"
            v-model="username"
          />
          <v-text-field
            outlined
            dense
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            v-model="password"
          />
          <div v-if="warning">
            Login failed. Please enter correct username and password.
          </div>
          <div v-else>
            {{ error }}
          </div>
          <div class="text-center">
            <v-btn
              depressed
              max-width="150"
              class=" mx-auto primary text-capitalize"
              type="submit"
              >Login</v-btn
            >
          </div>
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
      username: "",
      password: "",
      warning: false,
      error: "",
      role: null,
      loginOptions: [
        { id: "l1", title: "Student" },
        { id: "l2", title: "Professor" },
        { id: "l3", title: "Admin" },
      ],
    };
  },
  methods: {
    login() {
      console.log("Login", this.row);
      try {
        if (this.username === "" || this.password === "") {
          this.warning = true;
          return;
        }
        this.$store.dispatch("login", {
          username: this.username,
          password: this.password,
          role: this.role,
        });
      } catch (err) {
        this.error = err.message || "User not found. Check the details again.";
      }
    },
  },
};
</script>

<style></style>

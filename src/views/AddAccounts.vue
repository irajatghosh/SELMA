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
        <v-form ref="form" @submit.prevent="createUser">
          <v-text-field
            outlined
            dense
            label="First Name"
            v-model="firstname"
            required
          />
          <v-text-field
            outlined
            dense
            label="Last Name"
            v-model="lastname"
            required
          />
          <v-text-field
            outlined
            dense
            label="Username"
            v-model="username"
            required
            :rules="emailRules"
          />
          <v-text-field
            outlined
            dense
            :type="showPassword ? 'text' : 'password'"
            label="Set Password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            v-model="password"
          />
          <div v-if="warning" class="error--text">
            Please enter all fields.
          </div>

          <v-btn
            depressed
            max-width="150"
            class=" mr-4 primary text-capitalize"
            type="submit"
            >Create Account</v-btn
          >

          <v-btn
            depressed
            max-width="150"
            class="  error text-capitalize"
            @click="$router.replace('/main')"
            >Cancel</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
    <the-modal message="Account created!" :visible="dialog" @close="close" />
  </v-container>
</template>

<script>
import TheModal from "../components/UI/TheModal.vue";
export default {
  components: { TheModal },
  data() {
    return {
      showPassword: false,
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      warning: false,
      dialog: false,
      role: null,
      accountOptions: [
        { id: "a1", title: "Student" },
        { id: "a2", title: "Professor" },
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    createUser() {
      if (
        !this.firstname ||
        this.firstname.trim().length === 0 ||
        !this.lastname ||
        this.lastname.trim().length === 0 ||
        !this.username ||
        this.username.trim().length === 0 ||
        !this.password ||
        this.password.trim().length === 0
      ) {
        this.warning = true;
        return;
      }
      this.warning = false;
      this.$store.dispatch("addUsers", {
        firstname: this.firstname,
        lastname: this.lastname,
        username: this.username,
        password: this.password,
        role: this.role,
      });
      this.dialog = true;
      console.log("user", this.$store.getters.getUsers);
    },
    reset() {
      this.$refs.form.reset();
    },
    close() {
      this.dialog = false;
      this.reset();
    },
  },
};
</script>

<style></style>

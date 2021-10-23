<template>
  <section>
    <v-btn text class="mr-2">
      About
    </v-btn>
    <v-btn
      v-if="loggedIn.length === 0"
      rounded
      depressed
      class="pink lighten-1 mr-2"
      @click="loginRoute"
    >
      Login
    </v-btn>
    <v-btn v-else rounded depressed class="pink lighten-1 mr-2" @click="logout">
      logout
    </v-btn>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    loggedIn() {
      console.log("login data", this.$store.getters.getUser);
      return this.$store.getters.getUser;
    },
  },
  methods: {
    loginRoute() {
      this.$router.replace("/login");
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace("/");
    },
  },
};
</script>

<style></style>

<template>
  <section>
    <v-btn text class="mr-2">
      About
    </v-btn>
    <v-btn rounded depressed class="pink lighten-1 mr-2" @click="loginRoute">
      Login
    </v-btn>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    loginRoute() {
      this.$router.replace("/login");
    },
  },
};
</script>

<style></style>

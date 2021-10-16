<template>
  <v-app>
    <the-header></the-header>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from "./components/header/TheHeader.vue";
export default {
  name: "App",
  components: {
    TheHeader,
  },

  data: () => ({
    //
  }),
};
</script>

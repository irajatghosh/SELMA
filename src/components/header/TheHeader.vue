<template>
  <v-app-bar dense app color="primary" dark>
    <div class="d-flex align-center">
      <h2 class="text-uppercase ">Selma</h2>
    </div>

    <v-spacer></v-spacer>
    <navigation-lists></navigation-lists>
  </v-app-bar>
</template>

<script>
import NavigationLists from "./NavigationLists.vue";
export default {
  components: {
    NavigationLists,
  },
};
</script>

<style></style>

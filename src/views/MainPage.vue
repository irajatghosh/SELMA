<template>
  <v-container>
    <h1>Main page</h1>
    <v-row>
      <v-col cols="6">
        <the-menu></the-menu>
      </v-col>
      <v-col cols="6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          optio facere iste velit ipsum! Fugit dolorem perspiciatis nihil
          sapiente. Odit cupiditate molestias eligendi velit dolore recusandae
          consequatur et numquam illum?
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TheMenu from "../components/menu/TheMenu.vue";
export default {
  components: {
    TheMenu,
  },
  created() {
    console.log("in student", this.$store.getters.getResults);
  },
};
</script>

<style></style>

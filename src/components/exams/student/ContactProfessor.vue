<template>
  <section>
    <v-card
      class="my-3 mr-2"
      outlined
      v-for="professor in getProfessorData"
      :key="professor.id"
    >
      <v-card-title>{{ professor.fullname }} </v-card-title>
      <v-card-text>
        <p>
          Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac
          felis. Etiam feugiat lorem non metus. Sed a libero.
        </p>
      </v-card-text>

      <contact-form />
    </v-card>
  </section>
</template>

<script>
import ContactForm from "../../UI/ContactForm.vue";
export default {
  components: { ContactForm },
  computed: {
    getProfessorData() {
      return this.$store.getters.getProfessors;
    },
  },
};
</script>

<style></style>

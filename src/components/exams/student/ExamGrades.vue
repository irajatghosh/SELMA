<template>
  <section>
    <v-card v-if="!showResults" outlined class="mx-auto mt-4" max-width="500">
      <v-card-text>
        <h4 class="text-center">No results availabe.</h4>
      </v-card-text>
    </v-card>
    <the-data-table
      :headers="headers"
      show-search="true"
      :examData="results"
      v-else
    />
  </section>
</template>

<script>
import TheDataTable from "../../UI/TheDataTable.vue";
export default {
  components: { TheDataTable },
  data() {
    return {
      formDialog: false,
      headers: [
        {
          text: "Subject",
          align: "start",
          sortable: false,
          value: "subject",
          disabled: false,
        },
        {
          text: "Professor",
          align: "start",
          sortable: false,
          value: "professorName",
          disabled: false,
        },
        {
          text: "Professor email",
          align: "start",
          sortable: false,
          value: "professorId",
          disabled: false,
        },
        {
          text: "Grade",
          align: "start",
          sortable: false,
          value: "grade",
          disabled: false,
        },
        {
          text: "Status",
          align: "start",
          sortable: false,
          value: "status",
          disabled: false,
        },
      ],

      results: [],

      role: "",
    };
  },

  computed: {
    showResults() {
      return this.results;
    },
  },

  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      const { id: userId } = this.$store.getters.getUser;
      this.$store.dispatch("searchGrade", userId);

      this.results = this.$store.getters.getSingleResult;
    },
  },
};
</script>

<style></style>

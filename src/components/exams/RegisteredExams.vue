<template>
  <section>
    <v-card
      v-if="registeredExam.length === 0"
      class="mx-auto mt-4 "
      max-width="600"
    >
      <v-card-title>
        <h4 class="text-center mx-auto">
          No exam registered!
        </h4>
      </v-card-title>
      <v-card-actions>
        <v-btn
          depressed
          dark
          @click="$router.replace('/main')"
          class="mx-auto pink lighten-1"
          >Back</v-btn
        >
      </v-card-actions>
    </v-card>
    <section v-else>
      <v-toolbar dark color="pink lighten-1" class="mb-1">
        <v-text-field
          v-model="search"
          clearable
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Search"
        ></v-text-field>
        <v-btn class="ml-2" @click="$router.replace('/main')">Back</v-btn>
      </v-toolbar>

      <v-data-table
        :headers="headers"
        :items="registeredExam"
        :items-per-page="5"
        :search="search"
        class="elevation-1"
      >
        <template v-slot:item.actions="{ item }">
          <v-btn
            small
            rounded
            depressed
            class="primary text-capitalize"
            @click="deRegister(item)"
            >De-Register</v-btn
          >
        </template>
      </v-data-table>
    </section>
    <the-modal
      :mode="mode"
      :visible="dialog"
      :message="message"
      @close="close"
    ></the-modal>
  </section>
</template>

<script>
import TheModal from "../UI/TheModal.vue";
export default {
  components: {
    TheModal,
  },
  data() {
    return {
      dialog: false,
      mode: "",
      search: "",

      message: "",

      headers: [
        {
          text: "Subject",
          align: "start",
          sortable: false,
          value: "subject",
        },
        { text: "Date", value: "date" },
        { text: "Time", value: "time" },
        { text: "Professor", value: "professor" },

        { text: "Actions", value: "actions", sortable: false },
      ],
      registeredExam: [],
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      const { id: userId } = this.$store.getters.getUser;

      this.$store.dispatch("setRegisteredExam", { userId });
      this.registeredExam = this.$store.getters.getRegisteredExam;
    },
    deRegister(item) {
      const examId = item.id;
      this.mode = "deregister";
      const { id: userId } = this.$store.getters.getUser;
      this.$store.dispatch("deRegister", { examId, userId });

      this.message = "You want to de-register?";
      this.dialog = true;
    },
    close() {
      this.dialog = false;
      this.registeredExam = this.$store.getters.getRegisteredExam;
    },
  },
};
</script>

<style></style>

<template>
  <section>
    <v-data-table :headers="headers" :items="examData" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Exams </v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn
            color="pink lighten-1"
            depressed
            dark
            class="mb-2 mr-2"
            @click="backToMain"
          >
            <v-icon left size="30">arrow_back</v-icon>
            back
          </v-btn>
          <v-btn
            color="primary"
            depressed
            dark
            class="mb-2"
            @click="openAddModal"
            v-if="auth.role === 'Admin'"
          >
            <v-icon left size="30">add</v-icon>
            Add Exam
          </v-btn>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn
          v-if="auth.role === 'Student'"
          small
          rounded
          depressed
          class="primary text-capitalize"
          @click="register(item)"
          >Register</v-btn
        >
        <v-icon
          v-if="auth.role === 'Admin'"
          class="mr-2"
          color="black"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          v-if="auth.role === 'Admin'"
          color="error"
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
    <the-modal
      :mode="mode"
      :visible="dialog"
      :title="title"
      :data="editedItem"
      :error="error"
      :message="message"
      @close="close"
      @save="save"
    ></the-modal>
  </section>
</template>

<script>
import TheModal from "../UI/TheModal.vue";
export default {
  components: {
    TheModal,
  },
  data: () => ({
    dialog: false,
    dialogDelete: false,
    title: "",
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
    examData: [],
    showModal: false,
    mode: "",
    error: "",
    message: "",
    editedIndex: -1,
    editedItem: {
      subject: "",
      date: null,
      time: null,
      professor: "",
    },
    defaultItem: {
      subject: "",
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      time: null,
      professor: "",
    },
  }),
  computed: {
    // formTitle() {
    //   return this.editedIndex === -1 ? "Add New Exam" : "Edit Exam";
    // },
    auth() {
      return this.$store.getters.getUser;
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      console.log("exams", this.$store.getters.getExams);
      this.examData = this.$store.getters.getExams;
    },
    backToMain() {
      this.$router.replace("/main");
    },
    openAddModal() {
      this.mode = "add";
      this.title = "Add exam";
      this.dialog = true;
    },
    editItem(item) {
      this.mode = "edit";
      this.title = "Edit exam";
      this.editedIndex = this.examData.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      this.mode = "delete";
      this.message = "Are you sure to delete this exam?";
      this.editedIndex = this.examData.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save(data) {
      if (this.editedIndex > -1) {
        this.$store.dispatch("updateExams", data);
        this.close();
      } else {
        this.$store.dispatch("addExams", data);
        this.close();
      }
    },
    register(item) {
      try {
        const { id: userId } = this.$store.getters.getUser;
        const examId = item.id;
        this.$store.dispatch("registerExam", { userId, examId });
        this.message = "Examination registration completed!";
        this.error = "";
        this.dialog = true;
      } catch (error) {
        this.message = "";
        this.error = error.message || "Exam already registered!";
        this.dialog = true;
      }
    },
  },
};
</script>

<style></style>

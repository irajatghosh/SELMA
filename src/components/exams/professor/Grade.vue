<template>
  <section>
    <v-card class="mt-2 mb-4">
      <v-card-text>
        <form>
          <v-select
            :items="subjects"
            v-model="subjectName"
            label="Select Subject"
            outlined
            item-text="subject"
            dense
            @change="onSelectExam"
            return-object
          >
          </v-select>
          <v-btn class="success" depressed @click="search">Search</v-btn>
          <v-btn
            dark
            class="pink lighten-1 ml-2"
            depressed
            @click="$router.replace('/main')"
            >Back</v-btn
          >
        </form>
      </v-card-text>
    </v-card>
    <the-data-table
      :headers="headers"
      :examData="participants"
      :role="role"
      @openForm="formDialogOpen"
    />
    <!-- <the-form
      v-if="formDialog"
      :visible="formDialog"
      :data="formData"
      @close="closeFormDialog"
      @save="addGrade"
    /> -->
  </section>
</template>

<script>
import TheDataTable from "../../UI/TheDataTable.vue";
//import TheForm from "../../UI/TheForm.vue";
export default {
  components: {
    TheDataTable,
    // TheForm
  },
  data() {
    return {
      formDialog: false,
      headers: [
        {
          text: "Fullname",
          align: "start",
          sortable: false,
          value: "fullname",
          disabled: false,
        },
        {
          text: "Username",
          align: "start",
          sortable: false,
          value: "username",
          disabled: false,
        },
        {
          text: "Status",
          align: "start",
          sortable: false,
          value: "status",
          disabled: false,
        },

        { text: "Actions", value: "actions", sortable: false },
      ],
      subjectName: "",
      selectedExam: null,
      examDetails: [],
      participants: [],
      role: "",
      formData: null,
    };
  },
  computed: {
    subjects() {
      return this.examDetails;
    },
    assignedExam() {
      return this.examDetails;
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      const userData = this.$store.getters.getUser;
      this.role = userData.role;
      const { username } = userData;

      this.$store.dispatch("viewAssignedExams", username);
      const examData = this.$store.getters.getAssignedExams;

      this.examDetails = examData;
    },
    formDialogOpen(data) {
      this.formData = {
        ...data,
        examId: this.selectedExam.id,
        subject: this.selectedExam.subject,
      };

      this.formDialog = true;
    },

    onSelectExam(item) {
      this.selectedExam = item;
    },
    search() {
      this.$store.dispatch(
        "findSubjectRegisteredParticipants",
        this.selectedExam
      );
      const participantsDetail = this.$store.getters.getParticipants;

      this.participants = participantsDetail;
    },
  },
};
</script>

<style></style>

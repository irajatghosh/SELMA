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
      console.log("in component", this.role);

      this.examDetails = examData;
      console.log("professor data", this.examDetails);
    },
    formDialogOpen(data) {
      console.log(data);
      this.formData = {
        ...data,
        examId: this.selectedExam.id,
        subject: this.selectedExam.subject,
      };

      console.log("the form data", this.formData);
      this.formDialog = true;
    },
    // closeFormDialog() {
    //   this.formDialog = false;
    // },
    // addGrade(data) {
    //   console.log(data);
    //   this.$store.dispatch("addGrade", data);
    //   console.log("grades are", this.$store.getters.getResults);
    // },
    onSelectExam(item) {
      this.selectedExam = item;

      // console.log("seletced subject", item);
    },
    search() {
      console.log("subject selected", this.subjectName);
      this.$store.dispatch(
        "findSubjectRegisteredParticipants",
        this.selectedExam
      );
      const participantsDetail = this.$store.getters.getParticipants;
      // const modifiedData = participantsDetail.map((m) => ({
      //   ...m,
      //   status: "Not Evaluated",
      //   examId: this.selectedExam.id,
      //   subject: this.selectedExam.subject,
      // }));

      //console.log("modified data", modifiedData);
      console.log("new data", participantsDetail);
      this.participants = participantsDetail;

      console.log("actual data", this.participants);
    },
  },
};
</script>

<style></style>

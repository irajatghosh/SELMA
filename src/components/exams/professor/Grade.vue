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
        </form>
      </v-card-text>
    </v-card>
    <the-data-table :headers="headers" :examData="participants" :role="role" />
  </section>
</template>

<script>
import TheDataTable from "../../UI/TheDataTable.vue";
export default {
  components: { TheDataTable },
  data() {
    return {
      headers: [
        {
          text: "Fullname",
          align: "start",
          sortable: false,
          value: "fullname",
        },
        {
          text: "Username",
          align: "start",
          sortable: false,
          value: "username",
        },

        { text: "Actions", value: "actions", sortable: false },
      ],
      subjectName: "",
      selectedExam: null,
      examDetails: [],
      participants: [],
      role: "",
    };
  },
  computed: {
    subjects() {
      // const subjectName = this.examDetails.map((s) => {
      //   return s.subject;
      // });
      // console.log("subject name", subjectName);
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
      // const filteredData = examData.map((e) => ({
      //   subject: e.subject,
      //   date: e.date,
      //   time: e.time,
      // }));
      // this.examDetails = filteredData;
      this.examDetails = examData;
      console.log("professor data", this.examDetails);
    },
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

      this.participants = participantsDetail;
      console.log("actual data", this.participants);
    },
  },
};
</script>

<style></style>

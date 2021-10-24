<template>
  <section>
    <h2>Assigned exams</h2>
    <the-data-table
      :headers="headers"
      :exam-data="assignedExam"
      role="Professor"
      title="Assigned Exams"
    />
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
          text: "Subject",
          align: "start",
          sortable: false,
          value: "subject",
        },
        {
          text: "Date",
          align: "start",
          sortable: false,
          value: "date",
        },
        {
          text: "Time",
          align: "start",
          sortable: false,
          value: "time",
        },
      ],
      examDetails: [],
    };
  },
  computed: {
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
      const { username } = userData;

      this.$store.dispatch("viewAssignedExams", username);
      const examData = this.$store.getters.getAssignedExams;

      const filteredData = examData.map((e) => ({
        subject: e.subject,
        date: e.date,
        time: e.time,
      }));
      this.examDetails = filteredData;
    },
  },
};
</script>

<style></style>

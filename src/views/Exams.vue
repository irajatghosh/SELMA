<template>
  <v-container>
    <h2>Exam Dashboard</h2>
    <exam-lists />
  </v-container>
</template>

<script>
import ExamLists from "../components/exams/ExamLists.vue";
export default {
  components: { ExamLists },
};
</script>

<style></style>

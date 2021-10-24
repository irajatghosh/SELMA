<template>
  <section>
    <v-toolbar v-if="showSearch" dark color="pink lighten-1 mt-4" class="mb-1">
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
      :items="examData"
      :search="search"
      class="elevation-1 mt-4"
    >
      <template v-if="title" v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>{{ title }} </v-toolbar-title>
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
            v-if="role === 'Admin'"
          >
            <v-icon left size="30">add</v-icon>
            Add Exam
          </v-btn>
        </v-toolbar>
      </template>
      <template v-slot:item.grade="{ item }">
        <v-chip dark>
          {{ item.grade }}
        </v-chip>
      </template>
      <template v-slot:item.status="{ item }">
        <v-chip small dark class="success">
          {{ item.status }}
        </v-chip>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn
          v-if="role === 'Student'"
          small
          rounded
          depressed
          class="primary text-capitalize"
          @click="register(item)"
          >Register</v-btn
        >
        <v-btn
          v-if="item.status === 'Not Evaluated'"
          small
          rounded
          depressed
          class="primary text-capitalize"
          @click="formDialogOpen(item)"
          >Evaluate</v-btn
        >

        <v-chip
          v-if="item.status === 'Evaluated'"
          color="green"
          text-color="white"
          small
        >
          Evaluated
        </v-chip>

        <v-icon
          v-if="role === 'Admin'"
          class="mr-2"
          color="black"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon v-if="role === 'Admin'" color="error" @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
    <the-form
      v-if="formDialog"
      :visible="formDialog"
      :data="formData"
      @close="closeFormDialog"
      @save="addGrade"
    />
  </section>
</template>

<script>
import TheForm from "./TheForm.vue";
export default {
  components: { TheForm },
  props: ["headers", "examData", "title", "role", "showSearch"],
  data() {
    return {
      formDialog: false,
      formData: null,
      status: false,
      showEvaluate: false,
      editedIndex: -1,
      search: "",
    };
  },
  computed: {
    newActions() {
      return this.showEvaluate;
    },
  },
  methods: {
    backToMain() {
      this.$router.replace("/main");
    },
    formDialogOpen(item) {
      this.editedIndex = this.examData.indexOf(item);
      this.formData = item;
      console.log("index", this.editedIndex);
      console.log("the form data", this.formData);

      this.formDialog = true;
    },

    addGrade(data) {
      console.log("in data table", data);

      //Object.assign(this.examData[this.editedIndex], data);

      this.$store.dispatch("addGrade", data);
      console.log("grades are", this.$store.getters.getResults);
      const foundIndex = this.editedIndex;
      this.$store.dispatch("updateParticipantListAfterEvaluation", {
        foundIndex,
        data,
      });
      this.examData = this.$store.getters.getParticipants;
      console.log("after change", this.examData);
      this.closeFormDialog();
    },
    closeFormDialog() {
      this.formDialog = false;
    },
  },
};
</script>

<style></style>

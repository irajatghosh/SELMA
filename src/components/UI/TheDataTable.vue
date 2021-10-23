<template>
  <v-data-table :headers="headers" :items="examData" class="elevation-1">
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
        v-if="role === 'Professor'"
        small
        rounded
        depressed
        class="primary text-capitalize"
        @click="register(item)"
        >Evaluate</v-btn
      >
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
</template>

<script>
export default {
  props: ["headers", "examData", "title", "role"],

  methods: {
    backToMain() {
      this.$router.replace("/main");
    },
  },
};
</script>

<style></style>

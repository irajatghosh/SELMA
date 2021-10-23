<template>
  <v-dialog v-model="show" persistent max-width="500px">
    <v-card>
      <v-card-title>
        <span class="text-h5">{{ title }}</span>
      </v-card-title>
      <v-card-text>
        <form @submit.prevent="save">
          <v-text-field
            v-model="data.fullname"
            label="Name"
            required
            disabled
          ></v-text-field>
          <v-text-field
            v-model="data.username"
            label="E-mail"
            required
            disabled
          ></v-text-field>
          <v-text-field
            v-model="data.subject"
            label="Subject"
            required
            disabled
          ></v-text-field>
          <v-text-field
            v-model="grade"
            label="Grade"
            required
            type="number"
          ></v-text-field>

          <p v-if="warning" class="error--text">Please enter grade.</p>

          <v-btn depressed class="mr-4 success" type="submit">
            submit
          </v-btn>
          <v-btn depressed class="error" @click="close">
            cancel
          </v-btn>
        </form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["visible", "mode", "data", "title", "error", "message"],
  data() {
    return {
      grade: "",
      warning: false,
    };
  },
  computed: {
    show: {
      get() {
        return this.visible;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      },
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    save() {
      if (!this.grade || this.grade.trim().length === 0) {
        this.warning = true;
        return;
      }
      this.warning = false;
      this.$emit("save", {
        ...this.data,
        status: "Evaluated",
        grade: this.grade,
      });
    },
  },
};
</script>

<style></style>

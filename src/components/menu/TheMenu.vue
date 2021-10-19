<template>
  <section>
    <v-row dense>
      <v-col
        class="text-center"
        v-for="item in items"
        :key="item.title"
        :cols="item.flex"
      >
        <v-card
          height="100%"
          dark
          flat
          class="primary"
          :disabled="item.disabled"
        >
          <v-card-text>
            <v-icon size="35">
              {{ item.icon }}
            </v-icon>
          </v-card-text>

          <v-card-title>
            <h4 class="mx-auto white--text">
              {{ item.title }}
            </h4>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Create Account",
          icon: "group_add",
          flex: 6,
          disabled: false,
          to: "/status",
        },
        {
          title: "View Accounts",
          icon: "people",
          flex: 6,

          to: "",
        },
        {
          title: "Add exams",
          icon: "library_books",
          flex: 6,
          disabled: false,
          to: "/control",
        },
        {
          title: "Assign exams ",
          icon: "assignment_return",
          flex: 6,

          to: "",
        },
        {
          title: "Delete exams",
          icon: "delete",
          flex: 6,

          to: "",
        },
      ],
    };
  },
};
</script>

<style></style>

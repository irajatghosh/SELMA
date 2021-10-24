<template>
  <section>
    <v-row dense v-if="auth">
      <v-col
        class="text-center"
        v-for="item in auth"
        :key="item.title"
        :cols="item.flex"
      >
        <v-card
          height="100%"
          dark
          flat
          class="primary"
          :disabled="item.disabled"
          @click="router.push(item.to)"
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
      router: this.$router,

      admin: [
        {
          title: "Create Account",
          icon: "group_add",
          flex: 6,

          to: "/addaccounts",
        },
        {
          title: "View Accounts",
          icon: "people",
          flex: 6,

          to: "",
        },
        {
          title: "Exams",
          icon: "library_books",
          flex: 6,

          to: "/exams",
        },
        {
          title: "View Requests",
          icon: "email",
          flex: 6,

          to: "/page-under-construction",
        },
      ],
      professors: [
        {
          title: "Assigned Exams",
          icon: "assignment",
          flex: 6,

          to: "/assigned",
        },
        {
          title: "Grade Exams",
          icon: "grading",
          flex: 6,

          to: "/grade",
        },
        {
          title: "View Requests",
          icon: "email",
          flex: 6,

          to: "/page-under-construction",
        },
      ],
      students: [
        {
          title: "Register Exams",
          icon: "create",
          flex: 6,
          to: "/exams",
        },
        {
          title: "View Exams",
          icon: "content_paste_search",
          flex: 6,

          to: "/registeredexams",
        },
        {
          title: "Results",
          icon: "grade",
          flex: 6,

          to: "/results",
        },
        {
          title: "Contact",
          icon: "contact_mail",
          flex: 6,

          to: "/contact",
        },
      ],
    };
  },
  computed: {
    auth() {
      const user = this.$store.getters.getUser;

      if (user.role === "Student") {
        return this.students;
      } else if (user.role === "Admin") {
        return this.admin;
      } else {
        return this.professors;
      }
    },
  },
};
</script>

<style></style>

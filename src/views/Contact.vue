<template>
  <v-container>
    <template>
      <v-card outlined>
        <v-toolbar flat color="primary" dark>
          <v-toolbar-title>Contact</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn
            depressed
            class="pink ighten-1"
            @click="$router.replace('/main')"
            >Back</v-btn
          >
        </v-toolbar>
        <v-tabs vertical>
          <v-tab>
            <v-icon left>
              mdi-account
            </v-icon>
            Professors
          </v-tab>
          <v-tab>
            <v-icon left>
              apartment
            </v-icon>
            Examination Office
          </v-tab>

          <v-tab-item>
            <contact-professor />
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <contact-form />
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </template>
  </v-container>
</template>

<script>
import ContactProfessor from "../components/exams/student/ContactProfessor.vue";
import ContactForm from "../components/UI/ContactForm.vue";
export default {
  components: {
    ContactProfessor,
    ContactForm,
  },
};
</script>

<style></style>

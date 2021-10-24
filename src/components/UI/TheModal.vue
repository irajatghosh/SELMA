<template>
  <section>
    <v-dialog v-model="show" persistent max-width="500px">
      <v-card v-if="mode === 'add' || mode === 'edit'">
        <v-card-title>
          <span class="text-h5">{{ title }}</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="data.subject"
                  label="Subject"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <!-- <v-select
                  v-model="data.professor"
                  :items="getProfessors"
                  label="Professor"
                ></v-select> -->
                <v-select
                  :items="getProfessors"
                  label="Professor"
                  item-text="fullname"
                  return-object
                  @change="onSelectProfessor"
                >
                </v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="data.date"
                      label="Select Date"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="data.date"
                    @input="menu2 = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="data.time" label="Time"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <p v-if="warning" class="error--text">
            Please fill or select all the fields.
          </p>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error darken-1" text @click="close">
            Cancel
          </v-btn>
          <v-btn color="blue darken-1" text @click="save">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card v-else-if="mode === 'delete' || mode === 'deregister'">
        <v-card-title class="text-h5">{{ message }}</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="deleteItemConfirm"
            >OK</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
      <v-card v-else>
        <v-card-title v-if="message" class="text-h5">{{
          message
        }}</v-card-title>
        <v-card-title class="text-h5">{{ error }}</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="blue darken-1" text @click="close">OK</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- <v-dialog v-else v-model="show" max-width="500px">
      
    </v-dialog> -->
  </section>
</template>

<script>
export default {
  props: ["visible", "mode", "data", "title", "error", "message"],
  data() {
    return {
      menu2: false,
      warning: false,
      selectedProfessor: null,
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

    getProfessors() {
      const professorsList = this.$store.getters.getProfessors;

      return professorsList;
    },
  },

  methods: {
    close() {
      this.warning = false;
      this.$emit("close");
    },
    onSelectProfessor(item) {
      this.data.professor = item.username;
      this.data.professorName = item.fullname;
    },
    save() {
      if (
        !this.data.subject ||
        !this.data.professor ||
        !this.data.date ||
        !this.data.time ||
        this.data.subject.trim().length === 0 ||
        this.data.date.trim().length === 0 ||
        this.data.time.trim().length === 0
      ) {
        this.warning = true;
        return;
      }
      this.warning = false;
      this.$emit("save", this.data);
    },
    deleteItemConfirm() {
      if (this.mode === "deregister") {
        this.close();
        return;
      }
      this.$store.dispatch("deleteExam", this.data.id);

      this.close();
    },
  },
};
</script>

<style></style>

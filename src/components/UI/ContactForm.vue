<template>
  <v-card flat>
    <v-card-text>
      <form>
        <v-text-field v-model="subject" label="Subject" required></v-text-field>
        <v-textarea
          name="input-7-1"
          outlined
          label="Message"
          auto-grow
        ></v-textarea>
        <v-btn class="success text-capitalize">Send</v-btn>
      </form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      subject: "",
    };
  },
};
</script>

<style></style>

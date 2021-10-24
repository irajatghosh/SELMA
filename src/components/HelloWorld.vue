<template>
  <v-container>
    <v-row class="text-center my-3">
      <v-col cols="4">
        <v-card :loading="loading">
          <v-img :src="require('../assets/exam.jpg')" height="250" />
        </v-card>
      </v-col>

      <v-col cols="8">
        <v-card outlined>
          <v-card-text>
            <h1 class="display-2 font-weight-bold mb-3">
              Welcome to <span class="text-uppercase">Selma</span>
            </h1>

            <p class="subheading text-justify font-weight-regular">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem, perferendis dolores. Vel sequi accusamus possimus at
              culpa! Totam, optio dignissimos? Ullam sapiente cum consectetur
              veniam, eaque voluptas maiores nobis quos?
              <br />Login here to register for your exam
              <a href="#" target="_blank">Login </a>
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="4">
        <v-card :loading="loading">
          <v-img :src="require('../assets/news.jpg')" height="250" />
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-card outlined>
          <v-card-text>
            <h1 class="display-2 font-weight-bold mb-3">
              News
            </h1>

            <p class="subheading text-justify font-weight-regular">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem, perferendis dolores. Vel sequi accusamus possimus at
              culpa! Totam, optio dignissimos? Ullam sapiente cum consectetur
              veniam, eaque voluptas maiores nobis quos?
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    loading: false,
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href:
          "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

Vue.createApp({
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    lichtschalter() {
      this.darkMode = !this.darkMode;

      if (this.darkMode) {
        document.body.classList.add("dark");
        document.title = "Good Night";
      } else {
        document.body.classList.remove("dark");
        document.title = "Good Morning";
      }
    },
  },
}).mount("#app");

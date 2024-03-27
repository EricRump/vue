Vue.createApp({
  data() {
    return {
      appName: "Todo App",

      todos: [
        { description: "Learn HTML", done: true, id: 1 },
        { description: "Learn Vue", done: false, id: 2 },
        { description: "Learn JS", done: true, id: 3 },
        { description: "Learn CSS", done: false, id: 4 },
        { description: "Staubsaugen", done: true, id: 5 },
        { description: "Spazieren", done: false, id: 6 },
      ],

      currentDescription: "",

      filter: "done",
    };
  },

  methods: {
    addTodo() {
      if (this.isValidDescription) {
        this.todos.push({
          description: this.currentDescription,
          done: false,
          id: Math.random() * Date.now(),
        });
      } else {
        window.alert("EYYYY 😡");
      }
    },

    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
  },

  computed: {
    isValidDescription() {
      if (this.currentDescription.replaceAll(" ", "") !== "") {
        return true;
      }

      return false;
    },

    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      } else if (this.filter === "open") {
        return this.todos.filter((todo) => todo.done === false);
      } else {
        return this.todos.filter((todo) => todo.done === true);
      }
    },
  },
}).mount("#app");

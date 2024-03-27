Vue.createApp({
  data() {
    return {
      appName: "Todo App",

      todos: [],

      currentDescription: "",

      filter: "all",
    };
  },

  methods: {
    fetchTodos() {
      fetch("http://localhost:4730/todos")
        .then((response) => response.json())
        .then((data) => {
          this.todos = [...this.todos, ...data];
          console.log(this.todos);
        });
    },

    addTodo() {
      if (this.isValidDescription) {
        this.todos.push({
          description: this.currentDescription,
          done: false,
          id: Math.random() * Date.now(),
        });
        let newTodo = {
          description: this.currentDescription,
          done: false,
          id: Math.random() * Date.now(),
        };

        fetch("http://localhost:4730/todos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTodo),
        });
      } else {
        window.alert("EYYYY 😡");
      }
    },

    deleteTodo(index) {
      const deletedTodo = this.todos[index];
      this.todos.splice(index, 1);
      fetch(`http://localhost:4730/todos/${deletedTodo.id}`, {
        method: "DELETE",
      });
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
  mounted() {
    this.fetchTodos();
  },
}).mount("#app");

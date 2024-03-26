Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },
  methods: {
    mousemove(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },

    remove(fruitToRemove) {
      this.fruitBasket = this.fruitBasket.filter((fruit) => {
        return fruit !== fruitToRemove;
      });
    },
  },
}).mount("#app");

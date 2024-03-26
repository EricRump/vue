Vue.createApp({
  data() {
    return {
      red: 0,
      green: 0,
      blue: 0,
      rgbValue: "rgb(0, 0, 0)",
    };
  },
  methods: {
    color() {
      this.rgbValue = `rgb(${this.red}, ${this.green}, ${this.blue})`;
    },
    randomColor() {
      this.red = Math.floor(Math.random() * 256);
      this.green = Math.floor(Math.random() * 256);
      this.blue = Math.floor(Math.random() * 256);
      this.rgbValue = `rgb(${this.red}, ${this.green}, ${this.blue})`;
    },
  },
}).mount("#app");

/*
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const main = document.querySelector("main");
const text = document.querySelector("p");

function colorMixer() {
  let redValue = red.value;
  let greenValue = green.value;
  let blueValue = blue.value;

  // Farbe erstellen und dem main hinzufügen

  let rgbValue = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  main.style.backgroundColor = rgbValue;

  red.addEventListener("input", colorMixer);
  green.addEventListener("input", colorMixer);
  blue.addEventListener("input", colorMixer);

  //RGB als Text anzeigen lassen
  text.textContent = rgbValue;
}
colorMixer();

//Random Color
const button = document.querySelector("button");

button.addEventListener("click", function () {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let redValue = data.rgb.r;
      let greenValue = data.rgb.g;
      let blueValue = data.rgb.b;

      red.value = redValue;
      green.value = greenValue;
      blue.value = blueValue;

      colorMixer();
    });
});
*/

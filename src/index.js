
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const start = document.querySelector('button[data-action="start"]');
const stop = document.querySelector('button[data-action="stop"]');
let intervalID = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const changeColor = function () {
  start.disabled = true;
  if (intervalID === null) {
    intervalID = setInterval(() => {
      let index = randomIntegerFromInterval(0, colors.length - 1);
      document.querySelector("body").style.backgroundColor = colors[index];
    }, 1000);
  }
};

const stopChangeColore = function () {
  start.disabled = false;
  clearInterval(intervalID);
  intervalID = null;
};

start.addEventListener("click", changeColor);
stop.addEventListener("click", stopChangeColore);
let boxWidth = 50;
let boxHeight = 50;
let numRows = 4;
let numCols = 7;
let boxes = [];
function setup() {
  createCanvas(700, 700);
}

function randomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

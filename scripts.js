let boxWidth = 50;
let boxHeight = 50;
let numRows = 4;
let numCols = 7;
let boxes = [];
function setup() {
  createCanvas(700, 700);
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      let x = j * 70 + 10;
      let y = i * 70 + 10; //pozitia boxului cu un loop
      let color = getRandomColor();
      let number = i * numCols + j + 1;
      boxes.push({ x: x, y: y, color: color, number: number });
    }
  }
}

function randomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

let boxWidth = 70;
let boxHeight = 60;
let numRows = 4;
let numCols = 7;
let boxes = [];
function setup() {
  createCanvas(700, 700);
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      let x = j * 75 + 50;
      let y = i * 65 + 50; //pozitia boxului cu un loop
      let color = randomColor();
      let number = i * numCols + j + 1;
      boxes.push({ x: x, y: y, color: color, number: number });
    }
  }
}

function draw() {
  for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i];
    fill(box.color);
    rect(box.x, box.y, boxWidth, boxHeight);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(box.number, box.x + boxWidth / 2, box.y + boxHeight / 2);
  }
}

function randomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

let x = 20;
let y = 800;
let size = 20;
let color = [random(255), random(255), random(255)];

function setup() {
  createCanvas(1340, 679);
  noStroke();
  fill(...color);
  ellipse(x, y, size, size);
  ellipse(x + 16, y, size, size);
  triangle(x + 24, y + 6, (x + (x + 16)) / 2, y + 28, x - 8, y + 6);
}

function draw() {
  background("pink");

 
}

let x = 0;

function setup() {
  createCanvas(1340, 679);
}

function draw() {
  describe("pink square with red heart in the bottom right corner");
  background("pink");

  fill("red");
  noStroke();
  ellipse(67, 67, 20, 20);
  ellipse(83, 67, 20, 20);
  triangle(91, 73, 75, 95, 59, 73);

  fill("blue");
  noStroke();
  ellipse(700, 500, 20, 20);
  ellipse(716, 500, 20, 20);
  triangle(700, 505, 716, 505, 708, 530);
}

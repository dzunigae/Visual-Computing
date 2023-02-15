let bg;
let y = 0;

function setup() {
  createCanvas(1920, 1200);
  frameRate(20);
  bg = loadImage('../assets/2.jpg')
}

function draw() {
  if(mouseIsPressed){
    fill(0);
  }else{
    fill(255);
    background(bg);
  }
  //Elipse
  ellipse(mouseX,mouseY,380,380)
  //Color de los bordes y líneas
  stroke(0,255,80);
  //Ancho de los bordes y líneas
  strokeWeight(4);
  //Linea
  line((frameCount * 10) % width, 0, (frameCount * 10) % width, height)
}

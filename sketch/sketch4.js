let originalImage;
let modifiedImage;

function preload() {
  originalImage = loadImage("../assets/sketch/2/prueba.png", function () {
    originalImage.loadPixels();
    modifiedImage = originalImage.get();
    modifiedImage.loadPixels();
  });
}

function setup() {
  createCanvas(1341, 680);

  //+0: Rojo, +1: Verde, +2: Azul

  //Botón 1
  let button1 = createButton("Deuteranopia");
  button1.position(80, 40);
  button1.mousePressed(function () {
    modifiedImage.loadPixels();
    for (let i = 0; i < modifiedImage.width * modifiedImage.height; i++) {
      let g = modifiedImage.pixels[i * 4 + 1];
      let r = modifiedImage.pixels[i * 4 + 0];
      if(g>r){
        modifiedImage.pixels[i * 4 + 0] = g;
        modifiedImage.pixels[i * 4 + 1] = g;
      }else if(r>g){
        modifiedImage.pixels[i * 4 + 0] = r;
        modifiedImage.pixels[i * 4 + 1] = r;
      }else{
        modifiedImage.pixels[i * 4 + 2] -= 200;
      }
    }
    modifiedImage.updatePixels();
  });

  //Botón 2
  let button2 = createButton("Protanopia");
  button2.position(button1.x + button1.width + 10, 40);
  button2.mousePressed(function () {
    //Función del botón 2
  });

  //Botón3
  let button3 = createButton("Tritanopia");
  button3.position(button2.x + button2.width + 10, 40);
  button3.mousePressed(function () {
    //Función del botón 2
  });

  //Botón4
  let button4 = createButton("Retornar a original");
  button4.position(button3.x + button3.width + 10, 40);
  button4.mousePressed(function () {
    originalImage.loadPixels();
    modifiedImage = originalImage.get();
    modifiedImage.loadPixels();
  });
}

function draw() {
  background("pink");

  let maxWidth = 400;
  let maxHeight = 400;

  let oImgWidth = originalImage.width;
  let oImgHeight = originalImage.height;

  if (oImgWidth > maxWidth) {
    oImgHeight *= maxWidth / oImgWidth;
    oImgWidth = maxWidth;
  }
  if (oImgHeight > maxHeight) {
    oImgWidth *= maxHeight / oImgHeight;
    oImgHeight = maxHeight;
  }

  image(originalImage, 0, 200, oImgWidth, oImgHeight);

  textSize(30);
  fill(0);
  text("Imagen Original", oImgWidth / 4, 170);

  image(modifiedImage, oImgWidth + 100, 200, oImgWidth, oImgHeight);

  textSize(30);
  fill(0);
  text("Imagen Modificada", oImgWidth + 100 + oImgWidth / 4, 170);
}

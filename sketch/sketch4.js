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
  let button1 = createButton("Botón 1");
  button1.position(80, 40);
  button1.mousePressed(function () {
    modifiedImage.loadPixels();
    for (let i = 0; i < modifiedImage.width * modifiedImage.height; i++) {
      let greenValue = modifiedImage.pixels[i * 4 + 1];
      if (greenValue != 0) {
        modifiedImage.pixels[i * 4 + 1] = 0;
      }
    }
    modifiedImage.updatePixels();
  });

  let button2 = createButton("Botón 2");
  button2.position(180, 40);
  button2.mousePressed(function () {
    //Función del botón 2
  });
}

function draw() {
  background("pink");

  let maxWidth = 600;
  let maxHeight = 600;

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

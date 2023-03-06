let originalImage;
let modifiedImage;
let proposedImage;

function preload() {
  originalImage = loadImage("../assets/sketch/2/prueba.png", function () {
    originalImage.loadPixels();
    modifiedImage = originalImage.get();
    modifiedImage.loadPixels();
    proposedImage = originalImage.get();
    proposedImage.loadPixels();
  });
}

function setup() {
  createCanvas(1341, 680);

  //+0: Rojo, +1: Verde, +2: Azul

  //Botón 1
  let button1 = createButton("Deuteranopia");
  button1.position(80, 40);
  button1.mousePressed(function () {
    originalImage.loadPixels();
    modifiedImage = originalImage.get();
    modifiedImage.loadPixels();
    for (let i = 0; i < modifiedImage.width * modifiedImage.height; i++) {
      let g = modifiedImage.pixels[i * 4 + 1];
      let r = modifiedImage.pixels[i * 4 + 0];
      modifiedImage.pixels[i * 4 + 1] = (g + r) / 2;
      modifiedImage.pixels[i * 4 + 0] = (g + r) / 2;
    }
    modifiedImage.updatePixels();
  });

  //Botón 2
  let button2 = createButton("Protanopia");
  button2.position(button1.x + button1.width + 10, 40);
  button2.mousePressed(function () {
    originalImage.loadPixels();
    modifiedImage = originalImage.get();
    modifiedImage.loadPixels();
    for (let i = 0; i < modifiedImage.width * modifiedImage.height; i++) {
      let g = modifiedImage.pixels[i * 4 + 1];
      let r = modifiedImage.pixels[i * 4 + 0];
      let b = modifiedImage.pixels[i * 4 + 2];

      if (g > r && g > b) {
        modifiedImage.pixels[i * 4 + 1] = (r + g) / 2 + 120;
        modifiedImage.pixels[i * 4 + 0] = (r + g) / 2 + 120;
        modifiedImage.pixels[i * 4 + 2] = 0;
      } else if (g > r && b > g) {
        modifiedImage.pixels[i * 4 + 1] = g + g * 0.5;
        modifiedImage.pixels[i * 4 + 0] = 0;
        modifiedImage.pixels[i * 4 + 2] = b + b * 0.5;
      } else if (r > g && g > b && r > b) {
        if (abs(r - g) < 20) {
          modifiedImage.pixels[i * 4 + 1] = (r + g) / 2;
          modifiedImage.pixels[i * 4 + 0] = (r + g) / 2;
        } else {
          modifiedImage.pixels[i * 4 + 1] = (r + g) / 2 - 20;
          modifiedImage.pixels[i * 4 + 0] = (r + g) / 2 - 20;
        }
      } else if (r > g && b > g) {
        modifiedImage.pixels[i * 4 + 1] = g + 2 + (g + 2) * 0.9;
        modifiedImage.pixels[i * 4 + 0] = 0;
        modifiedImage.pixels[i * 4 + 2] = b + b * 0.9;
      } else if (r > g && r > b) {
        modifiedImage.pixels[i * 4 + 1] = r - 150;
        modifiedImage.pixels[i * 4 + 0] = r - 150;
      }
    }
    modifiedImage.updatePixels();
  });

  //Botón3
  let button3 = createButton("Tritanopia");
  button3.position(button2.x + button2.width + 10, 40);
  button3.mousePressed(function () {
    originalImage.loadPixels();
    modifiedImage = originalImage.get();
    modifiedImage.loadPixels();

    for (let i = 0; i < modifiedImage.width * modifiedImage.height; i++) {
      let g = modifiedImage.pixels[i * 4 + 1];
      let r = modifiedImage.pixels[i * 4 + 0];
      let b = modifiedImage.pixels[i * 4 + 2];

      if (b > r && b > g) {
        if (r >= g) {
          modifiedImage.pixels[i * 4 + 2] = 0;
        } else {
          modifiedImage.pixels[i * 4 + 2] = (g + b) / 2 - 50;
          modifiedImage.pixels[i * 4 + 1] = (g + b) / 2 - 50;
        }
      } else if (b > r && g > b) {
        modifiedImage.pixels[i * 4 + 1] = (g + b) / 2 + 50;
        modifiedImage.pixels[i * 4 + 2] = (g + b) / 2 + 50;
      } else if (r > b && g > b) {
        if (abs(r - g) < 20) {
          modifiedImage.pixels[i * 4 + 0] = r;
          modifiedImage.pixels[i * 4 + 1] = g - g * 0.1;
          modifiedImage.pixels[i * 4 + 2] = b + 250;
        } else {
          modifiedImage.pixels[i * 4 + 0] = r;
          modifiedImage.pixels[i * 4 + 1] = g - g * 0.1;
          modifiedImage.pixels[i * 4 + 2] = b + 130;
        }
      }
    }
    modifiedImage.updatePixels();
  });

  //Botón4
  let button4 = createButton("Retornar a original");
  button4.position(button3.x + button3.width + 10, 40);
  button4.mousePressed(function () {
    originalImage.loadPixels();
    modifiedImage = originalImage.get();
    modifiedImage.loadPixels();
    proposedImage = originalImage.get();
    proposedImage.loadPixels();
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

  textSize(25);
  fill(0);
  text("Imagen Original", oImgWidth / 4, 170);

  image(modifiedImage, oImgWidth + 50, 200, oImgWidth, oImgHeight);

  textSize(25);
  fill(0);
  text("Como vería", oImgWidth + 100 + oImgWidth / 4, 170);

  image(proposedImage, 2 * (oImgWidth + 50), 200, oImgWidth, oImgHeight);

  textSize(25);
  fill(0);
  text("Imagen modificada", 2 * (oImgWidth + 50) + oImgWidth / 4, 170);
}

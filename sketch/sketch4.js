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

function multiplyMatrices(a, b) {
  let rowsA = a.length;
  let colsA = a[0].length;
  let rowsB = b.length;
  let colsB = b[0].length;
  let result = new Array(rowsA);
  if (colsA != rowsB) {
    console.log("Error: Las dimensiones de las matrices no coinciden");
    return null;
  }
  for (let i = 0; i < rowsA; i++) {
    result[i] = new Array(colsB);
    for (let j = 0; j < colsB; j++) {
      let sum = 0;
      for (let k = 0; k < colsA; k++) {
        sum += a[i][k] * b[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
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
    //Código
    modifiedImage.updatePixels();
  });

  //Botón 2
  let button2 = createButton("Protanopia");
  button2.position(button1.x + button1.width + 10, 40);
  button2.mousePressed(function () {
    originalImage.loadPixels();
    modifiedImage = originalImage.get();
    modifiedImage.loadPixels();
    
    
    let matrixB = [[147],[82], [95]];
    let matrixA = [[0, 2.0234, -2.5258], [0, 1, 0], [0, 0, 1]];
    let result = multiplyMatrices(matrixA, matrixB);
    console.log(result); // muestra la matriz resultante en la consola

    modifiedImage.updatePixels();
  });

  //Botón3
  let button3 = createButton("Tritanopia");
  button3.position(button2.x + button2.width + 10, 40);
  button3.mousePressed(function () {
    originalImage.loadPixels();
    modifiedImage = originalImage.get();
    modifiedImage.loadPixels();
    //Código
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

let x = [0, 1, 118, 228, 254, 254.5]; // coordenadas x de los puntos
let y = [102, 32, 84, 186, 204, 255]; // coordenadas y de los puntos
let polynomial; // variable para guardar la expresión del polinomio interpolador

function lagrangeInterpolation(x, y, xi) {
  let n = x.length;
  let yi = 0;
  
  for (let i = 0; i < n; i++) {
    let term = y[i];
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        term *= (xi - x[j]) / (x[i] - x[j]);
      }
    }
    yi += term;
  }
  
  return yi;
}

function findPolynomial(x, y) {
  let n = x.length;
  let polynomial = "P(x) = ";
  
  for (let i = 0; i < n; i++) {
    let term = "";
    let numerator = "";
    let denominator = 1;
    
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        numerator += `(x - ${x[j]}) * `;
        denominator *= x[i] - x[j];
      }
    }
    
    numerator = numerator.slice(0, -3);
    term = `${y[i]} * (${numerator}) / ${denominator}`;
    
    if (i === 0) {
      polynomial += term;
    } else {
      polynomial += ` + ${term}`;
    }
  }
  
  return polynomial;
}

function setup() {
  createCanvas(400, 400);
  
  // Calcular el polinomio interpolador
  polynomial = findPolynomial(x, y);
  console.log(polynomial);
  
  // Dibujar el gráfico de la función interpoladora
  stroke(255, 0, 0);
  strokeWeight(2);
  noFill();
  beginShape();
  for (let xi = x[0]; xi <= x[x.length-1]; xi += 0.01) {
    let yi = lagrangeInterpolation(x, y, xi);
    vertex(xi * 50, 400 - yi * 50);
  }
  endShape();
  
  // Dibujar los puntos
  stroke(0);
  strokeWeight(8);
  for (let i = 0; i < x.length; i++) {
    point(x[i] * 50, 400 - y[i] * 50);
  }
  
  // Escribir la expresión del polinomio interpolador en el canvas
  fill(255);
  noStroke();
  textSize(20);
  text(polynomial, 20, 30);
}

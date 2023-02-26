let hearts = [];

function setup() {
  createCanvas(1340, 679);
  noStroke();

  //Crear los objetos en el arreglo
  for (let i = 0; i <= 50; i++) {
    let x = random(width);
    let y = random(height);
    const size = 20;
    let color = [random(255), random(255), random(255)];
    hearts.push({x: x, y: y, size: size, color: color, speed: random(10)})
  }
}

function draw() {
  background("pink");

  //Actualizar la posición de cada corazón
  for(let i = 0; i <= 50; i++){
    hearts[i].x += hearts[i].speed;

    if(hearts[i].x < 0 || hearts[i].x > width){
      hearts[i].speed *= -1;
    }
  }

  //Dibujar cada corazón en la posición indicada
  for(let i = 0; i <= 50; i++){
    let x =   hearts[i].x;
    let y =   hearts[i].y;
    let size =   hearts[i].size;
    let color =   hearts[i].color;

    fill(...color);
    ellipse(x, y, size, size);
    ellipse(x + 16, y, size, size);
    triangle(x + 24, y + 6, (x + (x + 16)) / 2, y + 28, x - 8, y + 6);
  }
}

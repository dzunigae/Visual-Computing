let prueba;
let smaller;
var scalefactor = 8;

function preload(){
    prueba = loadImage("/assets/sketch/3/prueba/16f51269d110b0490a9dee0b1b5164c8ff1eb4017f2c3583fe1a5b2d5423c7f4.jpg");
}

function setup(){
    createCanvas(prueba.width, prueba.height);
}

function draw(){
    background(220);
    image(prueba,0,0);
}
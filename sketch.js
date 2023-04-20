// Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 20;
let raio = diametroBolinha / 2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//Variáveis da Raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//Variáveis da Raquete 2
let xRaquete2 = 585;
let yRaquete2 = 150;
let raquete2Comprimento = 10;
let raquete2Altura = 90;
let velocidadeYRaquete2;

//Placar do Jogo
let pontosRaquete = 0;
let pontosRaquete2 = 0;

//Sons do Jogo
let raquetada;
let ponto;
let trilha;


function preload() {
  
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostrarBolinha();
  movimentarBolinha();
  verificarColisaoBorda();
  mostrarRaquete();
  movimentarRaquete();
  mostrarRaquete2();
  movimentarRaquete2();
  verificarColisaoRaquete();
  verificarColisaoRaquete2();
  incluiPlacar();
  marcaPonto();

}

function mostrarBolinha() {
  circle(xBolinha, yBolinha, diametroBolinha);
}

function movimentarBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificarColisaoBorda(){
  if (xBolinha + raio > width || 
     xBolinha - raio < 0) {
      velocidadeXBolinha *= -1;
  
  }
  if (yBolinha + raio > height ||
     yBolinha - raio < 10) {
      velocidadeYBolinha *= -1;
  }
}

function mostrarRaquete() {
    rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}

function movimentarRaquete() {
  if (keyIsDown(87)){
    yRaquete -= 10;
  }
  if (keyIsDown(83)){
    yRaquete += 10;
  }
}

function verificarColisaoRaquete() {
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function mostrarRaquete2() {
    rect(xRaquete2, yRaquete2, raquete2Comprimento, raquete2Altura);
}

//Raquete2 seguindo movimento da bola.
//function movimentarRaquete2() {
//velocidadeYRaquete2 = yBolinha - yRaquete2 - raquete2Comprimento /2 - 50;
//  yRaquete2 += velocidadeYRaquete2; 
//}

function movimentarRaquete2() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete2 -= 10;
  }
  
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete2 += 10;
  }
  
}

function verificarColisaoRaquete2() {
  if (xBolinha + raio > xRaquete2 - raquete2Comprimento && yBolinha + raio > yRaquete2 - raquete2Altura && yBolinha - raio > yRaquete2){
    
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function incluiPlacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(20);
  fill(color(255, 255, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(pontosRaquete, 170, 26);
  fill(color(255, 255, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosRaquete2, 470, 26);
}

function marcaPonto() {
  if (xBolinha > 590){
    pontosRaquete += 1;
    ponto.play();
  }
  if (xBolinha < 10) {
    pontosRaquete2 += 1;
    ponto.play();
  }
}



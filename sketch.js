// Variáveis da bola
let xBola = 300
let yBola = 200
let diametro = 25
let raio = diametro / 2
let velocidadeXBola = 6
let velocidadeYBola = 6

// Variáveis da raqueta
let xRaquete = 5
let yRaquete = 150
let comprimentoRaquete = 10
let alturaRaquete = 90

// Variáveis do oponente
let xRaquete2 = 585
let yRaquete2 = 150
let velocidadeY2

let colidiu = false

// Placar do jogo
let pontos1 = 0
let pontos2 = 0

function setup() {
  createCanvas(600, 400)
}

function draw() {
  background(0)
  mostraBola()
  mostraRaquete(xRaquete, yRaquete)
  mostraRaquete(xRaquete2, yRaquete2)
  movimentoBola()
  movimentoRaquete()
  movimentoRaquete2()
  verificaColisaoBorda()
  colisaoRaqueteLib(xRaquete, yRaquete)
  colisaoRaqueteLib(xRaquete2, yRaquete2)
  mostrarPlacar()
  marcaPonto()
}

function mostraBola(){
  circle(xBola, yBola, diametro)
}

function mostraRaquete(xRaquete, yRaquete){
  rect(xRaquete, yRaquete, comprimentoRaquete, alturaRaquete)
}

function movimentoBola(){
  xBola += velocidadeXBola
  yBola += velocidadeYBola
}

function verificaColisaoBorda(){  
  if(xBola + raio > width ||
    xBola - raio < 0){
     velocidadeXBola *= -1
  }
  if(yBola + raio > height ||
    yBola - raio < 0){
     velocidadeYBola *= -1
  }
}

function movimentoRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10
  }
}

function movimentoRaquete2(){
  velocidadeY2 = yBola - yRaquete2 - comprimentoRaquete / 2 - 30
  yRaquete2 += velocidadeY2
}

function colisaoRaqueteLib(xRaquete, yRaquete){
  colidiu = collideRectCircle(xRaquete, yRaquete, comprimentoRaquete, alturaRaquete, xBola, yBola, raio)
  
  if(colidiu){
    velocidadeXBola *= -1;
  }
}

function mostrarPlacar(){
  fill(255)
  text(pontos1, 278, 26)
  text(pontos2, 321, 26)
}

function marcaPonto(){
  if(xBola > 585){
    pontos1 += 1
  }
  if(xBola < 15){
    pontos2 += 1
  }
}
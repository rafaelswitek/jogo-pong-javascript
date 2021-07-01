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

let colidiu = false

function setup() {
  createCanvas(600, 400)
}

function draw() {
  background(0)
  mostraBola()
  mostraRaquete()
  movimentoBola()
  movimentoRaquete()
  verificaColisaoBorda()
  colisaoRaqueteLib()
}

function mostraBola(){
  circle(xBola, yBola, diametro)
}

function mostraRaquete(){
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

function colisaoRaqueteLib(){
  colidiu = collideRectCircle(xRaquete, yRaquete, comprimentoRaquete, alturaRaquete, xBola, yBola, raio)
  
  if(colidiu){
    velocidadeXBola *= -1;
  }
}
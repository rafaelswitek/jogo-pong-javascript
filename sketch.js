// Variáveis da bola
let xBola = 300
let yBola = 200
let diametro = 25
let raio = diametro / 2
let velocidadeXBola = 6
let velocidadeYBola = 6

function setup() {
  createCanvas(600, 400)
}

function draw() {
  background(0)
  mostraBola()
  movimentoBola()
  verificaColisaoBorda()
}

function mostraBola(){
  circle(xBola, yBola, diametro)
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
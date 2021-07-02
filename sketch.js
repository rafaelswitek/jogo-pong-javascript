// Variáveis da bola
let xBola = 300
let yBola = 200
let diametro = 13
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

// Sons do jogo
let trilha
let raquetada
let ponto

let chanceDeErrar = 0

function preload() {
  trilha = loadSound('sons/trilha.mp3')
  ponto = loadSound('sons/ponto.mp3')
  raquetada = loadSound('sons/raquetada.mp3')
}

function setup() {
  createCanvas(600, 400)
  trilha.loop()
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

function mostraBola() {
  circle(xBola, yBola, diametro)
}

function mostraRaquete(xRaquete, yRaquete) {
  rect(xRaquete, yRaquete, comprimentoRaquete, alturaRaquete)
}

function movimentoBola() {
  xBola += velocidadeXBola
  yBola += velocidadeYBola
}

function verificaColisaoBorda() {
  if (xBola + raio > width ||
    xBola - raio < 0) {
    velocidadeXBola *= -1
  }
  if (yBola + raio > height ||
    yBola - raio < 0) {
    velocidadeYBola *= -1
  }
}

function movimentoRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10
  }
}

function movimentoRaquete2() {
  velocidadeY2 = yBola - yRaquete2 - comprimentoRaquete / 2 - 30
  yRaquete2 += velocidadeY2 + chanceDeErrar
  calculaChanceDeErrar()
}

function colisaoRaqueteLib(xRaquete, yRaquete) {
  colidiu = collideRectCircle(xRaquete, yRaquete, comprimentoRaquete, alturaRaquete, xBola, yBola, raio)

  if (colidiu) {
    velocidadeXBola *= -1;
    raquetada.play()
  }
}

function mostrarPlacar() {
  stroke(255)
  textAlign(CENTER)
  textSize(16)
  fill(color(255, 140, 0))
  rect(150, 10, 40, 20)
  fill(255)
  text(pontos1, 170, 26)
  fill(color(255, 140, 0))
  rect(450, 10, 40, 20)
  fill(255)
  text(pontos2, 470, 26)
}

function marcaPonto() {
  if (xBola > 590) {
    ponto.play()
    pontos1 += 1
  }
  if (xBola < 10) {
    ponto.play()
    pontos2 += 1
  }
}

function calculaChanceDeErrar() {
  if (pontos2 >= pontos1) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39) {
      chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35) {
      chanceDeErrar = 35
    }
  }
}
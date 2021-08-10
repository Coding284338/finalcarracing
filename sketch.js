var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var allPlayers,car1,car2
var cars = []
var gameState
var track;
var car1Img, car2Img,titleImg
function preload() {
  backgroundImage = loadImage("assets/background.png");
  car1Img = loadImage("assets/car1.png")
  car2Img = loadImage("assets/car2.png")
  titleImg = loadImage("assets/title.png")
  track = loadImage("assets/track.jpg")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
  bgImg = backgroundImage;
}

function draw() {
  background(bgImg);
  if(playerCount==2){
game.update(1)
  }
  if(gameState==1){
game.play()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

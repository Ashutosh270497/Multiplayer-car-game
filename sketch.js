var database;
var gameState = 0;
var pC = 0;
var game, player, form;
var track;
var cars, car1, car2, car3, car4;
var allPlayers;

function preload() {
  track = loadImage("track.png");
  car1_img = loadImage("car1.png");
  car2_img = loadImage("car2.png");
  car3_img = loadImage("car3.png");
  car4_img = loadImage("car4.png");
  ground = loadImage("ground.png");
}
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(windowWidth,windowHeight);

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white"); 
  if (pC===4) {
    game.update(1);
  } 
  if (gameState===1) {
    game.play();
  }
}
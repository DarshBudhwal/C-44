const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var canvas;
var mario, mario_img;
var background1;
var ground;
var edges;

function preload(){
  mario_img= loadImage("mario3.png", "mario4.png");
  background1 = loadImage("background.png")
}
function setup() {
  canvas = createCanvas(displayWidth,displayHeight-145);
  engine = Engine.create();
  world = engine.world;

  mario = createSprite (400, 600, 50, 50);
  mario.addImage(mario_img);
  mario.scale= 0.1; 

  ground = createSprite(displayWidth/2,610, 1600,10);
 
}

function draw() {
  background(background1);  
  Engine.update(engine);

edges = createEdgeSprites();
mario.collide(ground);
mario.collide(edges);
  drawSprites();
}
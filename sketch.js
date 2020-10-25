const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1;
var particles= [];
var plinkos =[];
var divisions ;
var divisionHeight=300;

function setup() {
  var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
  ground1 = new ground(40,height,900,40);
  divisions = new Division(100,600,300,20);
  plinko1 = new plinko (100,50,20,20);
}

function draw() {
  background(0);  
  ground1.display();
  divisions.display();
  plinkos.display();
  drawSprites();
}
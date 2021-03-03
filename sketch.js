
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var engine;
var world;
var stone;
var rubber;
var hammer;
var plane;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	plane = new Plane(600,height,1200,20);
	stone = new Stone(300,300,70,70);
	rubber = new Rubber(400,400,70,70);
	hammer = new Hammer(500,500,70,70);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  hammer.display();
  stone.display();
  rubber.display();
  plane.display();
  drawSprites();
 
}




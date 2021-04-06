
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObj1, bobObj2, bobObj3, bobObj4, bobObj5, bobObj6;
var wall;
var chain1, chain2, chain3;
var chain4, chain5, chain6;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObj1 = new Bob(65, 600, 100);
	bobObj2 = new Bob(195, 600, 100);
	bobObj3 = new Bob(325, 600, 100);
	bobObj4 = new Bob(455, 600, 100);
	bobObj5 = new Bob(585, 600, 100);
	bobObj6 = new Bob(715, 600, 100);
	wall = new Roof(400, 40, 790 , 50);
	chain1 = new Rope(bobObj1.body, wall.body, -220, 0);
	chain2 = new Rope(bobObj2.body, wall.body, -110, 0);
	chain3 = new Rope(bobObj3.body, wall.body, 0, 0);
	chain4 = new Rope(bobObj4.body, wall.body, 110, 0);
	chain5 = new Rope(bobObj5.body, wall.body, 220, 0);
	chain6 = new Rope(bobObj6.body, wall.body, 330, 0);
	Engine.run(engine);
  
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObj1.body, bobObj1.body.position,{x:-50, y:-45});
	}
}


function draw() {
  rectMode(CENTER);
  background(0);
  wall.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  chain6.display();
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  bobObj6.display();
  drawSprites();
 
}




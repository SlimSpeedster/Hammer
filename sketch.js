
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var sand1, sand2, sand3, sand4, sand5, sand6;
var hammer;
var stone;
var rubber;

function preload(){

}

function setup() {
	createCanvas(600, 600);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600, height, 1200, 20);
	sand1 = new Sand(350, 590, 10);
	sand2 = new Sand(370, 590, 10);
	sand3 = new Sand(340, 590, 10);
	sand4 = new Sand(360, 550, 10);
	rubber = new Rubber(100, 550, 25);
	hammer = new Hammer(300, 300, 30);
	stone = new Stone(200, 560, 60, 60);
	

	//sand5 = new Sand(350, 590);
	//sand6 = new Sand(350, 590);

	//Engine.run(engine);

}


function draw() {
  background("skyblue");
  Engine.update(engine);

  text(mouseX+","+mouseY, 300, 300);

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  hammer.display();
  stone.display();
  rubber.display();
  //sand5.display();
  //sand6.display();

  drawSprites();
 
}




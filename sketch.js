const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var paper,ground,box1,box2,box3;
var engine,world;


function setup() {
	createCanvas(800, 400);
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	paper = new Paper(150,100,15);
	ground = new Ground(400,390,800,20);
	box1 = new Box1(650,320,80,10);
	box2 = new Box1(600,325,10,110);
	box3 = new Box1(700,325,10,110);
	box4 = new Box1(650,375,90,10);

	launcher1 = new Launcher(paper.body,{x:125,y:160});
}
	
  



function draw() {
  rectMode(CENTER);
  background("white");

  paper.display();
  box1.display();
  ground.display();
  box2.leftDisplay();
  box3.rightDisplay();
  box4.bottomDisplay();
  launcher1.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:32,y:-32});
	}
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    launcher1.fly();
   
}



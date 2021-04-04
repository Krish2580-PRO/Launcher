const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,launcher
function preload()
{
	
}

function setup() {
	createCanvas(1000,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1= new Ground(500,500,1000,10)

	side1 = new Side(750,490,200,20)
	side2 = new Side(650,450,20,100)
	side3 = new Side(850,450,20,100)

	paper = new Paper(150,480)

	launcher = new Launcher(paper.body,{x:150, y:140})
	Engine.run(engine);
  
	
}

function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 ground1.display()

side1.display()
side2.display()
side3.display()

paper.display()

launcher.display()
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}
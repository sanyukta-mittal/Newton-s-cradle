
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   bar = new Bar(400,200,450,50)

   bob1= new Bob(400,450,50)
   bob2= new Bob(400,450,50)
   bob3= new Bob(400,450,50)
   bob4= new Bob(400,450,50)
   bob5= new Bob(400,450,50)

   rope1= new Rope(bob1.body, bar.body,0,0)
   rope2= new Rope(bob2.body, bar.body,100,0)
   rope3= new Rope(bob3.body, bar.body,200,0)
   rope4= new Rope(bob4.body, bar.body,-100,0)
   rope5= new Rope(bob5.body, bar.body,-200,0)
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  bar.display();
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

 rope1.display()
 rope2.display()
 rope3.display()
 rope4.display()
 rope5.display()
 

  drawSprites();
 
}




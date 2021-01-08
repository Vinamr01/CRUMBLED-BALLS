
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(width/2-300, height - 55 , 25);

	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

paper.display();
  
  groundSprite=createSprite(width/2, height-35, width,10);
  groundSprite.shapeColor=color("white")

  bottomBox = createSprite(width/2 , height-45, 120 , 10);
  bottomBox.shapeColor = color("blue");
  
  side1 = createSprite(width/2-60, height-80, 10 , 80);
  side1.shapeColor = color("blue");

  side2 = createSprite(width/2+60, height-80, 10 , 80);
  side2.shapeColor = color("blue");
  
  
 drawSprites();
}

function keyPressed() {


  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}





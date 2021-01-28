var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var bottomBox,bottomBoxSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bottomBoxSprite=createSprite(width/2, 620, 200,20);
	bottomBoxSprite.shapeColor=color(255,0,0);

	sideBox=createSprite(width/2-100,610,20,100);
	sideBox.shapeColor=color(255,0,0);

	sideBoxb=createSprite(width/2+100,610,20,100);
	sideBoxb.shapeColor=color(255,0,0);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	bottomBox=Bodies.rectangle(width/2,649,200,20, {isStatic:true} );
	World.add(world, bottomBox);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

bottomBoxSprite.x=bottomBox.position.x;
bottomBoxSprite.y=bottomBox.position.y;
  drawSprites();
 
  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false);
    
  }
}




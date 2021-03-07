
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var treeimg,boyimg;
var mango1,mango2,mango3,mamgo4,mango5,mango6,mango7,mango8,mango9,mango10;

function preload(){
	boy=loadImage("images/boy.png");
	treeimg=loadImage("images/tree.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
    
	stoneObj=new stone(100,460,23);
	mango1=new mango(1100,100,30);
	mango2=new mango(855,325,35);
	mango3=new mango(670,260,35);
	mango4=new mango(730,200,35);
	mango5=new mango(710,320,36);
	mango6=new mango(780,250,35);
	mango7=new mango(825,170,33);
	mango8=new mango(880,360,35);
	mango9=new mango(940,220,35);
	mango10=new mango(900,305,35);

  attach=new Throw(stone.body,{x:100,y:465});

	treeObj=createSprite(775,368);
  treeObj.addImage(treeimg);
  treeObj.scale=0.42;

	 boy=createSprite(160,550);
	 boy.addImage(boyimg);
   boy.scale=0.125;
	 


	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);

  detectCollision(stones,mango1);
  detectCollision(stones,mango2);
  detectCollision(stones,mango3);
  detectCollision(stones,mango4);
  detectCollision(stones,mango5);
  detectCollision(stones,mango6);
  detectCollision(stones,mango7);
  detectCollision(stones,mango8);
  detectCollision(stones,mango9);
  detectCollision(stones,mango10);

  drawSprites();

  stoneObj.display();
  groundObject.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  groundObject.display();
}
function mouseDragged(){
  Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  attach.fly();
}
function detectCollision(lstones,lmango){
  if(lstones.body.position.x-lmango.body.position.x<lmango.diameter+lstones.diameter
    && lmango.body.position.x-lstones.body.position.x<lmango.diameter+lstones.diameter
    && lmango.body.position.y-lstones.body.position.y<lmango.diameter+lstones.diameter
    &&lmamgo.body.position.y-lstones.body.position.y<lmango.diameter+lstones.diameter){
    Matter.body.setStatic(lmango.body,false);
    }
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stones.body,{x:100,y:465});
    attach.Launch(stones.body);
  }
}
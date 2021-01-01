const Constraint=Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
var bobObject;
var world,engine;
var rope;
var roofObject;



function setup() {
	createCanvas(800, 700);
	engine=Engine.create();
	world=engine.world;
	bobObject1=new bob(50,200,50,50);
	bobObject2=new bob(80,200,50,50);
	bobObject3=new bob(110,200,50,50);
	bobObject4=new bob(130,200,50,50);
	bobObject5=new bob(160,200,50,50);
	var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });

	rope1=new rope(bobObject1.body,roofObject.body,bobDiameter*2,0);
	rope2=new rope(bobObject2.body,roofObject.body,bobDiameter*2,0);
	rope3=new rope(bobObject3.body,roofObject.body,bobDiameter*2,0);
	rope4=new rope(bobObject4.body,roofObject.body,bobDiameter*2,0);
	rope5=new rope(bobObject5.body,roofObject.body,bobDiameter*2,0);


	

	//Create the Bodies Here.


	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background("white");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  ropeObject1.display();
  ropeObject2.display();
  ropeObject3.display();
  ropeObject4.display();
  ropeObject5.display();
  
  
  drawSprites();
 
}
function keyPressed() {
	 if (keyCode === UP_ARROW) 
	 { Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45}); } }
	 function drawLine(constraint) { bobBodyPosition=constraint.bodyA.position roofBodyPosition=constraint.bodyB.position roofBodyOffset=constraint.pointB; roofBodyX=roofBodyPosition.x+roofBodyOffset.x roofBodyY=roofBodyPosition.y+roofBodyOffset.y line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY); }





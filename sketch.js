
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world;
let body;
let engine;

var ball,ball1,ball2,ball3,ball4;
var plank,plank1;
var wing,wing1,wing2;
var ground;
var angle1 = 60;
var angle2 = 60;
var angle3 = 60;
function setup() {
	createCanvas(600, 500);


	engine = Engine.create();
	world = engine.world;
    
	var ground_options={
      isStatic:true   
    }
  var wing_options= {
    isStatic:true

  }


	ground = Bodies.rectangle(300,490,600,20,ground_options);
	World.add(world,ground);
   
  plank1 = new Rect(150,300,100,10);
	World.add(world,plank1);

  plank = new Rect(450,300,100,10);
  World.add(world,plank);
  

  ball = new Ball(300,0,15);
  World.add(world,ball);

  ball1 = new Ball(308,0,15);
  World.add(world,ball1);

  ball2 = new Ball(292,0,15);
  World.add(world,ball2);

  ball3 = new Ball(300,0,15);
  World.add(world,ball3);

  ball4 = new Ball(308,0,15);
  World.add(world,ball4);

  wing = Bodies.rectangle(300,150,300,15,wing_options)
  World.add(world,wing);
  
  
  wing1 = Bodies.rectangle(300,150,300,15,wing_options)
  World.add(world,wing1);
  
  wing2 = Bodies.rectangle(300,150,300,15,wing_options)
  World.add(world,wing2);
  


	Engine.run(engine);
   
}


function draw() {
     background(189);
  Engine.update(engine);

   push();
   fill("red");
   stroke("red");
   rectMode(CENTER);
  rect(ground.position.x,ground.position.y,600,20);
  noFill();
  pop();
  

  plank1.display1();
  plank.display1();

  ball.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();


  Matter.Body.rotate(wing,angle1);
  push();
  fill("#96948d");
  stroke("#96948d");
  translate(wing.position.x,wing.position.y);
  rotate(angle1);
  rect(0,0,200,15);
  pop();
  angle1 = angle1+1.2;

  Matter.Body.rotate(wing1,angle2);
  push();
  fill("#96948d");
  stroke("#96948d");
  translate(wing1.position.x,wing1.position.y);
  rotate(angle3);
  rect(0,0,200,15);
 pop();
  angle2 = angle2+1;
 
  Matter.Body.rotate(wing2,angle3);
  push();
  fill("#96948d");
  stroke("#96948d");
  translate(wing2.position.x,wing2.position.y);
  rotate(angle3);
  rect(0,0,200,15);
  pop();
  angle3 = angle3+0.8;

}




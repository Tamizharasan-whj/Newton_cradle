const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world;
let body;

var roof;
var rope;
var rope1;
var rope2;
var rope3;
var rope4;
var ball;
var ball1;
var ball2;
var ball3;
var ball4;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(600, 500);
	

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	var ball_options={
		bounciness:2,
		airResistance:0.5,
		restitution:0.2
		
		
	}

	roof = Bodies.rectangle(275,150,450,20,roof_options);
    World.add(world,roof);

	ball  = Bodies.circle(200,300,20,ball_options);
	World.add(world,ball);
	ball1 = Bodies.circle(240,300,20,ball_options);
	World.add(world,ball1);
	ball2 = Bodies.circle(280,300,20,ball_options);
	World.add(world,ball2);
	ball3 = Bodies.circle(320,300,20,ball_options);
	World.add(world,ball3);
	ball4 = Bodies.circle(360,300,20,ball_options);
	World.add(world,ball4);
	
    ellipseMode(RADIUS);
	

	rope = Matter.Constraint.create({
     pointA : {x:200,y:150},
	 bodyB : ball,
	 pointB : {x:0,y:0},
	 length: 200,
	 stiffness: 0.03,

	})
	World.add(world,rope);

	rope1 = Matter.Constraint.create({
		pointA : {x:240,y:150},
		bodyB : ball1,
		pointB : {x:0,y:0},
		length: 200,
		stiffness: 0.03,
   
	   })
	   World.add(world,rope1);

	   rope2 = Matter.Constraint.create({
		pointA : {x:280,y:150},
		bodyB : ball2,
		pointB : {x:0,y:0},
		length: 200,
		stiffness: 0.03,
   
	   })
	   World.add(world,rope2);

	   rope3 = Matter.Constraint.create({
		pointA : {x:320,y:150},
		bodyB : ball3,
		pointB : {x:0,y:0},
		length: 200,
		stiffness: 0.03,
   
	   })
	   World.add(world,rope3);

	   rope4 = Matter.Constraint.create({
		pointA : {x:360,y:150},
		bodyB : ball4,
		pointB : {x:0,y:0},
		length: 200,
		stiffness: 0.03,
   
	   })
	   World.add(world,rope4);
	  
	
	Engine.run(engine);
	
  
}

function draw() {
 Engine.update(engine);
  background("#99004d"); 
  push();
  rectMode(CENTER);
  rect(roof.position.x,roof.position.y,230,20);
  pop();
  //call display() to show ropes here
  push();
  stroke(150);
  strokeWeight(2);
  line(rope.pointA.x,rope.pointA.y,ball.position.x,ball.position.y);
  line(rope1.pointA.x,rope1.pointA.y,ball1.position.x,ball1.position.y);
  line(rope2.pointA.x,rope2.pointA.y,ball2.position.x,ball2.position.y);
  line(rope3.pointA.x,rope3.pointA.y,ball3.position.x,ball3.position.y);
  line(rope4.pointA.x,rope4.pointA.y,ball4.position.x,ball4.position.y);
  pop();
  
  //create ellipse shape for multiple bobs here
  ellipse(ball.position.x,ball.position.y,20,20)
  ellipse(ball1.position.x,ball1.position.y,20,20)
  ellipse(ball2.position.x,ball2.position.y,20,20)
  ellipse(ball3.position.x,ball3.position.y,20,20)
  ellipse(ball4.position.x,ball4.position.y,20,20)

  
  
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode == RIGHT_ARROW){
	 Matter.Body.applyForce(ball,{x:0,y:0},{x:0.04,y:0})
	}
  }
  
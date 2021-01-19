const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon;
var ground;
var s1,s2;
var sling;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14;
function setup(){
createCanvas(1000,400);
engine = Engine.create();
world = engine.world;
  

ground = new Ground(500,400,1000,30);
s2 = new Ground(650,200,200,20);
s1 = new Ground(300,300,200,20);
polygon = new Polygon(100,100);
sling = new SlingShot(polygon.body,{x:100,y:100})
b1 = new Box (250,280,30,40);
b2 = new Box (280,280,30,40);
b3 = new Box (310,280,30,40);
b4 = new Box (340,280,30,40);
b5 = new Box (280,240,30,40);
b6 = new Box (310,240,30,40);
b7 = new Box (295,200,30,40);
b8 = new Box (665,199,30,40);
b9 = new Box (635,199,30,40);
b10 = new Box (610,199,30,40);
b11 = new Box (700,199,30,40);
b12 = new Box (640,100,30,40);
b13 = new Box (675,100,30,40);
b14 = new Box (655,60,30,40);
}

function draw() {
  background(0);  
  Engine.update(engine);
 
  ground.display();
  s2.display();
  s1.display();
  sling.display();
  polygon.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  sling.fly();
 
}
function keyPressed(){
  if(keyCode===32){
    sling.attach(polygon.body);
  }
}
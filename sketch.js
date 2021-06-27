//Name aliasing
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld,ground,ball;


function setup() {
  createCanvas(400,400);

  //must 13 & 14
  myEngine=Engine.create();
  myWorld=myEngine.world;

  //creating object
  ground = new Ground();
  box = new Box(200,300,50,50);
  box1 = new Box(240,100,50,100);
  


  
  

}

function draw() {
  background('black');  
  //must 40
  Engine.update(myEngine);

  //Displaying the ground
  ground.display();
  box.display();
  box1.display();
 
  
  
  
  
}
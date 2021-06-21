const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
var engine, world;
var bgImage;
var bird, birdImage;
var pillar1;

function preload(){
  bgImage = loadImage("images/bg.jpeg");
  birdImage = loadImage("images/bird.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight-74);
  
  engine = Engine.create();
  world = engine.world;

  var options = {
    resitution: 0.1,
    isStatic: true
  }

  bird = Bodies.rectangle(170,330,20,20,options);
  World.add(world, bird);
  bird.scale = 0.4;

  pillar1 = new Pillars(630,100,50,350);
}

function draw() {
  Engine.update(engine);

  console.log(mouseX);
  console.log(mouseY);
  
  background(bgImage);

  if(keyDown(UP_ARROW)){
    bird.y -= 3;
    }  

  pillar1.display();
  image(birdImage,bird.position.x,bird.position.y,20,20);

  drawSprites();
}
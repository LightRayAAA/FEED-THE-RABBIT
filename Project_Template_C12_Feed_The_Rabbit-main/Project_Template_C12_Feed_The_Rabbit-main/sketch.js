var garden,rabbit;
var gardenImg,rabbitImg;
var apple
var leaf

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  

garden=createSprite(200,200);
garden.addImage(gardenImg);

rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX
  createApples();
  createLeaves();
  drawSprites();
}
function createApples(){
if(frameCount%80==0){
apple = createSprite(random(0,200),0.20,20)
apple.addImage("apple",appleImg)
  apple.velocityY = 10
  apple.scale = 0.1
}
}
function createLeaves (){
  if(frameCount%120==0){
  leaf = createSprite(random(0,200),0,20,20)
  leaf.addImage("leaf",leafImg)
  leaf.scale = 0.1
  leaf.velocityY = 8
}
}
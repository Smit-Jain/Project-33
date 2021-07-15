var snowBg;
var snow, snowImage;

function preload(){
  snowBg=loadImage("snow3.jpg");
  snowImage=loadImage("snow4.webp");
}

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(snowBg); 
  if(frameCount%20===0){
    snow1();
  } 
  drawSprites();
}

function snow1(){
  snow=createSprite(random(50,750),0,50,50)
  snow.addImage(snowImage)
  snow.velocityY=5;
  snow.scale=0.1;
}
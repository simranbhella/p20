var car,wall;
var speed, weight;

function setup() {
  createCanvas(800,400);
  

  speed=Math.round(random(55,90));
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  car.velocityX=speed;
  wall=createSprite(700,200,60,200);
  wall.shapeColor=color(80,80,80);
}

function draw() {

  if(wall.x-car.x < (car.width+wall.width)/2){
car.velocityX=0;
var deformation=0.5 * weight * speed * speed/22509;
if (deformation>180){
  car.shapeColor=color(225,0,0);
}
if (deformation<180 && deformation>100){
  car.shapeColor=color(230,230,0);
}
if (deformation<100){
  car.shapeColor=color(0,225,0);
}
  }
  
  background(255,255,255);  
  drawSprites();
}
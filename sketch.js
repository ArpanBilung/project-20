var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

speed = random(55,90)
weight = random(400,1500)

speed.X=20;

car =createSprite(50,200,20,20);
car.velocityX = speed;
car.shapeColor ="red";
car.debug = true;

wall=createSprite(800,200,60,height/2);
wall.shapeColor="grey";
// wall.debug = true;

}

function draw() {
  background("black");  
  drawSprites();
  
if(wall.x-car.x<(car.width+wall.width)){
  car.velocityX=0;
  var deformation=0.5*width*speed/22509;

   
   if(deformation<180 && deformation>100){
     car.shapeColor=color(230,230,0)
    } 
         if(deformation>180){
         car.shapeColor=color(255,0,0)
        }

    if (car.x - wall.x < wall.width/2 + car.width/2
      && wall.x - car.x <wall .width/2 + car.width/2){
      
    return true;
  }
   else {
   return false

  }
}
  

}



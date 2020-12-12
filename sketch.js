var wall, car;
var speed, weight, deformation;
function setup() {
  createCanvas(1600,400);

  wall = createSprite(1300, 200, 50, 750);
  wall.shapeColor = "brown";

  speed=random(55,90);
  weight=random(400,1500);
  
  car = createSprite(100,200,50,50);
  car.velocityX = speed;
  
}

function draw() {
  background("lightgrey");  
  // if car has hit the wall, that means the center of the car sprite and the center of the wall, will be
  // either equal or less than the half of the width of the card and wall
  if(wall.x-car.x < (wall.width + car.width)/2){
    //reduce the velocity of car to zero as soon as it hits the wall
    car.velocityX = 0;
    // based on deformation, color will change
    deformation = (0.5 * weight * speed * speed ) / 22500;
    console.log(deformation);
    if(deformation>180)
    {
      car.shapeColor="red";
    }

    if(deformation<180 && deformation>100)
    {
      car.shapeColor="yellow";
    }

    if(deformation<100)
    {
      car.shapeColor="green";
    }
  }


  drawSprites();
}
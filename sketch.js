var bullet,wall, thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);

 bullet =  createSprite(50, 200, 20, 10);
 bullet.velocityX = speed;
 bullet.shapecolor="white";
 
 wall =  createSprite(1200, 200, thickness, height/2);
 wall.shapecolor="80,80,80";

 speed=random(233,321);
 weight=random(30,52);
 thickness=random(22,83);
}

function draw() {
  background(255,255,255);  
 
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10)
    {
      wall.shapecolor=color(255,0,0);
    }

    if(damage<10)
    {
      wall.shapecolor=color(0,255,0);
    }

  }

  drawSprites();
}

function hasCollided(Lbullet, Lwall)
{
bulletRightEdge=Lbullet.x+Lbullet.width;
wallLeftEdge=Lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true;
}
  return false;
}
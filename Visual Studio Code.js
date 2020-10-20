var object, fixedObject, gameObj1, gameObj2, gameObj3, gameObj4;

function setup()
 {
  createCanvas(800,400);

 object =  createSprite(400, 200, 80, 30);
 fixedObject =  createSprite(200, 200, 50, 80);

 gameObj1 = createSprite(100,100,50,50);
 gameObj1.shapecolor = "blue";

 gameObj2 = createSprite(200,100,50,50);
 gameObj2.shapecolor = "blue";

 gameObj3 = createSprite(300,100,50,50);
 gameObj3.shapecolor = "blue";

 gameObj4 = createSprite(400,100,50,50);
 gameObj4.shapecolor = "blue";

}

function draw() 
{
  background(255,255,255);  
  console.log(movingObject.x - fixedObject.x);
  movingObject.x = World.mouseX;
  movingObject.y = World.mouseY;

  if( isTouching(movingObject, gameObj2))
  {
movingObject.shapecolor = "red";
gameObj2.shapecolor = "red";

  }
  else
  {
movingObject.shapecolor = "green";
gameObj2.shapecolor = "green";
  }
 

  drawSprites();
}

function isTouching(object1, object2){

  if((object.x - object.x < object.width/2 + object.width/2) && (object.x - object.x < object.width/2 + object.width/2)
  && (object.y - object.y < object.width/2 + object.width/2) && (object.y - object.y < object.width/2 + object.width/2))
  {
    return true;
  }
  else
  {
    return false;
  }
}

  



}
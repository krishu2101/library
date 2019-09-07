var fixrect ,mrect;
function setup() {
  createCanvas(800,400);
 fixrect= createSprite(400, 200, 50, 50);
 mrect= createSprite(200, 200, 50, 50);
fixrect.velocityX=-5;
mrect.velocityX=5;
}


function draw() {
  background(255,255,255); 
 // mrect.y=World.mouseY;
  //mrect.x=World.mouseX;  
bounceoff(mrect,fixrect);
  drawSprites();
}
function bounceoff (mrect,fixrect) {
  if(fixrect.x-mrect.x<fixrect.width/2+mrect.width/2&&
    mrect.x-fixrect.x<fixrect.width/2+mrect.width/2)
    {
  fixrect.shapeColor="red";
  mrect.shapeColor="red";
  fixrect.velocityX*=(-1);
  mrect.velocityX*=(-1);
  }
  else if (fixrect.y-mrect.y<fixrect.height/2+mrect.height/2&&
    mrect.y-fixrect.y<fixrect.height/2+mrect.height/2) {
    fixrect.shapeColor="blue";
  mrect.shapeColor="blue";
  fixrect.velocityY*=(-1);
  mrect.velocityY*=(-1);
  }
}
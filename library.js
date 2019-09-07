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
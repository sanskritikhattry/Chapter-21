var fixedrect, movingrect;

function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(400, 100, 50, 80);
  fixedrect.shapeColor = "green";
  fixedrect.debug = true;
  movingrect = createSprite(400, 800,80,30);
  movingrect.shapeColor = "green";
  movingrect.debug = true;

  movingrect.velocityY = -5;
  fixedrect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(fixedrect, movingrect);
  if(isTouching(fixedrect, movingrect)){
fixedrect.shapeColor = 'purple';
movingrect.shapeColor = 'purple';
  
  }
  drawSprites();
}


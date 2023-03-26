var red;
var green;
var edges;

function setup() {
  createCanvas(600, 600);

red = createSprite(400,300,30,30)
red.shapeColor = ("red")

green = createSprite(200,300,30,30)
green.shapeColor = ("green")

edges = createEdgeSprites()
}


function draw() {
  background(220);

  green.bounceOff(red)
  red.bounceOff(edges)
//green.velocityX+=3
  keyControl()
  drawSprites()
}

function keyControl(){
  if (keyDown("UP")){
    green.y-=2
  }
  if(keyDown("RIGHT")){
    green.x+=2
  }
  if(keyDown("LEFT")){
    green.x-=2
  }
  if(keyDown("DOWN_ARROW")){
    green.y+=2
  }
  if (keyDown("W")){
    red.y-=2
  }
  if(keyDown("D")){
    red.x+=2
  }
  if(keyDown("A")){
    red.x-=2
  }
  if(keyDown("S")){
    red.y+=2
  }
}
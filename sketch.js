var ball;
var ground;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
 ball = createSprite(200,200,20,20);
 ground = createSprite(400,380,800,20);
}

function draw() {
  background("red");  
  ball.shapeColor = "blue";
  drawSprites();
}

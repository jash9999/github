var Rect1, Rect2, Rect3, Rect4, Rect5

function setup() {
  createCanvas(800,400);
  
  Rect1 = createSprite(180, 390, 100, 250);
  Rect2 = createSprite(600, 390, 100, 250);
  Rect3 = createSprite(275, 390, 80, 350);
  Rect4 = createSprite(505, 390, 80, 350);
  Rect5 = createSprite(390, 390, 130, 500);
}

function draw() {
  background("pink");  
  triangle(455, 140, 325, 140, 390, 110);
  drawSprites();
}
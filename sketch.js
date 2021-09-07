var bow , arrow,  background,red1,pink1,green1,blue1,arrowGrouo;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage= loadImage("green_balloon.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
}

function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;


for(var i=60; i<390; i=i+60){
  red1=createSprite(50,i,1,1);
  red1.addImage(red_balloonImage);
  red1.scale=0.1
}

  
for(var i= 110; i<300; i=i+60){
  green1=createSprite(100,i,10,10);
  green1.addImage(green_balloonImage);
  green1.scale=0.1
}

for(var i=160; i<250; i=i+60){
  blue1=createSprite(150,i,10,10);
  blue1.addImage(blue_balloonImage);
  blue1.scale=0.1
}
 
for(var i=200; i<250; i=i+60){
  pink1=createSprite(200,i,10,10);
  pink1.addImage(pink_balloonImage);
  pink1.scale=1.2
}
function draw() {

background.velocityX=-3;
  if(background.x<0){
    background.x=background.width/2

  bow.y = World.mouseY
  
  if (keyDown("space")) {
    createArrow();
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,1));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
  }
  
  drawSprites();
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

}

function blueBalloon() {
  var blue1 = createSprite(0,Math.round(random(20,370)),10,10);
  blue1.addImage(blue_balloonImage);
  blue1.velocityX =3;
  red.lifetime = 150;
  blue1.scale = 0.1
}

function greenBalloon() {
  //write code for spwaning green balloons
}

function pinkBalloon() {
  //write code for spwaning pink balloons
}
}
}
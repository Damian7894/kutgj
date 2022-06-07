var suelo;
var imgSuelo;
var aguila,aguilaImg
var bg,bgImg
var cazador,cazadorImg
var sueloInv;

function preload(){
//imgSuelo=loadImage("imagen3.png");
aguilaImg=loadImage("aguila.png")
bgImg=loadImage("descarga (9).jpg")
cazadorImg=loadImage("cazador.png")
}


function setup() {

  createCanvas(1000,500);


  bg=createSprite(400,300,1400,900)
  bg.scale=4;
  bg.addImage(bgImg);
  //bg.x=bg.width/2;
 //suelo=createSprite(-110, 400, 1900, 20);
 //suelo.x=suelo.width/2;
//suelo.addImage(imgSuelo);

cazador=createSprite(100,370)
cazador.addImage(cazadorImg);
cazador.scale=1



aguila=createSprite(300,100)
aguila.addImage(aguilaImg);
aguila.scale=0.7
fill("red")
sueloInv=createSprite(300,495,1000,10)

//sueloInv.visible=false;
}




function draw() {
  background(180);  
//bg.velocityX=3;
cazador.velocityY=cazador.velocityY+3;
cazador.collide(sueloInv);
  drawSprites();
}

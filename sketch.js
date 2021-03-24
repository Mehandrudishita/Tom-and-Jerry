var canvas,bg;
var together;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

function preload() {
    bgImage = loadImage("images/garden.png");
    tomImage1= loadAnimation("images/cat1.png");
    tomImage2=loadAnimation("images/cat2.png","images/cat3.png");
    tomImage3= loadAnimation("images/cat4.png");
    jerryImage1=loadAnimation("images/mouse1.png");
    jerryImage2= loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImage3=loadAnimation("images/mouse4.png");

}

function setup(){
    canvas = createCanvas(1000,800);
    bg = createSprite(500,400,1000,800);
    bg.addImage("background", bgImage);
    bg.scale = 1.2;

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImage1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImage1);
    jerry.scale = 0.15;

}

function draw() {

    background(0);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomImage3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerryImage3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImage2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImage2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}
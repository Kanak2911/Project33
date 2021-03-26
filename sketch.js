const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var snowFlakes = [];
var backgroundImg;
var maxFlakes=100;

function preload() {
    backgroundImg('snow1.jpg');
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);

    if(frameCount % 150 === 0){
      for(var i=0; i<maxFlakes; i++){
        snow.push(new createSnow(random(0,400), random(0,400)));
      }
    }
}

function draw(){
    Engine.update(engine);
    background(backgroundImg); 
    
    for(var i = 0; i<maxFlakes; i++){
        snow[i].showSnow();
        snow[i].updateY()
    }

    drawSprites();
}
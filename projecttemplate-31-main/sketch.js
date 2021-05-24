const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var drops=[];
var maxDrops=100;
var person;
var rain1;
var thunder;

function preload(){
thunder.loadImage("project312.png")
}

function setup(){
   createCanvas(500,800)
   engine = Engine.create();
   world = engine.world;

   if(frameCount%150===0){

    for(var i=0; i<maxDrops;i++){
        drops.push(new createDrop(random(0,400),random(0,400)))
    }

}
    person=new Umbrella(300,200,50);
    rain1=new createDrop(0,0,5);
}

function draw(){
    background(0)
    Engine.update(engine);


  person.display()
  rain1.display()

  rand=Math.round(random(1,4));
  if(frameCount%80===0){
      thunderCreatedFrame=frameCount;
      thunder.createSprite(random(10,370).random(10,30),10, 10)
      switch(rand){
          case 1:thunder.addImage(thunder1)
          break;
          case 2: thunder.addImage(thunder1)
          break;
          default:break;
      }
      thunder.scale=random(0.3,0.6)
  }






    drawSprites()
}   


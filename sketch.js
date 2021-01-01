const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2,box3, box4, box5,box6,box7,box8;
var backgroundImg,platform;
var bird,sling, slingshot, ground1, slingshot1;
var polygon,polygon_img;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;  

function preload() {

    polygon_img = loadImage("polygon.png");
  
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(600,350,200,8);
    box1 = new Box(525,325,20,40);
    box2 = new Box(545,325,20,40);
    box3 = new Box(565,325,20,40);
    box4 = new Box(585,325,20,40);
    box5 = new Box(605,325,20,40);
    box6 = new Box(625,325,20,40);
    box7 = new Box(645,325,20,40);
    box8 = new Box(665,325,20,40);

    polygon = new Polygon(150,150,15);
   // slingshot1 = new SlingShot(polygon,{x:525, y:325});

    
    
    //log6 = new Log(230,180,80, PI/2);
   // slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
   background("black"); 
    Engine.update(engine);

    ground1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    polygon.display();
    slingshot.display();    

drawSprites();

    
}
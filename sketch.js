const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var engine, world,p;
function setup() {
  createCanvas(600,700);
  engine = Engine.create();
  ground = new Ground(250,500,600,20);
  var spacing = width / cols;
  for(var j = 0; j < rows; j++){
    for(var i = 0; i < cols + 1; i++){
      if(j % 2 == 0){
        x += spacing/2;
      }
       var plinko = new Plinko(x,y,4);
       var x = i*spacing;
       var y = spacing + j * spacing;
       plinkos.push(plinko);
    }

  }
  for(var i = 0; i < cols + 1; i++){
  var division = new Divisions(i*spacing,divisionHeight/2,10,divisionHeight)
  divisions.push(division);
  }
  
}
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var cols = 11;
var rows = 10;


function draw() {
  background(0);
  Engine.update(engine);
  if(frameCount % 60 == 0){
    p = new Particle(300,50,10);
    particles.push(p);
  }  
  ground.display();
  for(var i = 0; i < particles.length;i++){
    particles[i].display();
  }
  for(var i = 0; i < plinkos.length;i++){
    plinkos[i].display();
  }
  for(var i = 0; i < divisions.length;i++){
    divisions[i].display();
  }
  drawSprites();
}
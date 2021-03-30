const Engine = Matter.Engine,
      World = Matter.World,
      Events = Matter.Events,
      Bodies = Matter.Bodies

var engine,world; 
var particles;
var plinkos=[];
var rows=[];
var ground;
var rows;
var score=0;
var gamestate="play";


var rowsHeight = 150;

function setup() {
  createCanvas(600,500);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,500,1700,10);
  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 55))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,85))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,120))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,150))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,185))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,225))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,265))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,305))
  }
  for(var k = 0; k <=width; k = k+80){
    rows.push(new Rows(k, height-rowsHeight/2, 10, rowsHeight));
  }
}

function draw() {
  background(0);
 
  Engine.update(engine, 25);
   
  for(var k = 0; k<rows.length;k++){
    rows[k].display();
 }


  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
 }

  text("500",32.5,375);
  text("500",115,375);
  text("500",195,375);
  text("200",275,375);
  text("200",355,375);
  text("100",425,375);
  text("100",505,375);
  text("100",570,375);
  textSize(20);
  text("Score:"+score,50,30);
  ground.display();

  if(particles!=null)
  {
    particles.display();
     
    if(particles.body.position.y>760)
    {

      if (particles.body.position.x < 300)
      {

        score=score+500;
        particles=null;

      }
    }
  }
}
function mousePressed(){
  if(gamestate!=="end")
  {
    particles=new Particle(mouseX,10,10,10);
  }
}
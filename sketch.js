const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint

var engine,world,canvas;
var b1,b2,b3,b4,b5
var sling,s2,s3,s4,s5;

function setup(){
    canvas=createCanvas(windowWidth/2,windowHeight/1.5)
    engine=Engine.create()
    world=engine.world

  b1=new Pendulum(windowWidth/8+30,windowHeight/2,"blue")
  sling=new Sling(b1.body,{x:windowWidth/8+30,y:100})

  
  b2=new Pendulum(windowWidth/6+30,windowHeight/2,"blue")
  sling=new Sling(b1.body,{x:windowWidth/6+30,y:100})

  b3=new Pendulum(windowWidth/6+85,windowHeight/2,"blue")
  sling=new Sling(b1.body,{x:windowWidth/6+85,y:100})

  b4=new Pendulum(windowWidth/6+140,windowHeight/2,"blue")
  sling=new Sling(b1.body,{x:windowWidth/6+140,y:100})

  b5=new Pendulum(windowWidth/6+195,windowHeight/2,"blue")
sling=new Sling(b1.body,{x:windowWidth/6+195,y:100})



    let canvasmouse=Mouse.create(canvas.elt)
   canvasmouse.pixelRatio=pixelDensity();
   let opt={
     mouse:canvasmouse
   };
   mConstraint=MouseConstraint.create(engine,opt)
   World.add(world,mConstraint)
    //creating objects
}

function draw(){
  background(180)
  Engine.update(engine)

 
  b1.display()
  sling.display()

  b2.display()
  s2.display()

  b3.display()
  s3.display()

  b4.display()
  s4.display()

  b5.display()
  s5.display()

}

function mouseDragged(){
  Matter.Body.setPosition(p1.body,{x:mouseX,y:mouseY})
  Matter.Body.setPosition(p5.body,{x:mouseX,y:mouseY})
}
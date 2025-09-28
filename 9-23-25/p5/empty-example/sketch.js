let dot;


function setup() {
  // put setup code here
  createCanvas(600, 400);
  colorMode(HSB);
  frameRate(60);
}

function draw() {
  // put drawing code here
  background(0,0,0);
  dot.draw();



  let hue = mouseX/width * 360;
  fill(hue,100,100);
  //no fill()
  stroke(255,255,255);
  strokeWeight(10);
  ellipse(mouseX,mouseY,80,180);

}

class Dot {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.hue = Math.random() * 360;
  }

  draw() {
    this.x += -0.5 + Math.random();
    this.y += -0.5 + Math.random();


    fill(this.hue, 60, 100);
    ellispe(this.x, this.y, this.radius,this.radius);
  }

}

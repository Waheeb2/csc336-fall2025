let dots = [];

function setup() {
  // put setup code here
  createCanvas(600, 400);
  noStroke();
  colorMode(HSB);
  frameRate(60);

  for (let i = 0; i < 100; i++) {
    let dot = new Dot(width/2, height/2, i);
    dots.push(dot);
  }
}

function draw() {
  // put drawing code here
  background(0,0,0);
  
  for (let dot of dots) {
    dot.draw();
  }
}

class Dot {
  constructor(x, y, index) {
    this.x = x; 
    this.y = y;
    this.index = index;
    this.hue = Math.random() * 360;
    this.radius = 100 + dots.length - this.index * 2;

    this.velocityX = random(-5, 5);
    this.velocityY = random(-5, 5);


  }

  draw() {
    // this.x += -0.5 + Math.random();
    // this.y += -0.5 + Math.random();

    // this.x += map(Math.random(), 0, 1, -1, 1);
    // this.y += map(Math.random(), 0, 1, -1, 1);

    this.x += this.velocityX;
    this.y += this.velocityY;

    if (this.x > width || this.x < 0) {
      this.velocityX *= -1;
    }

    if (this.y > height || this.y < 0) {
      this.velocityY *= -1;
    }

    this.velocityX *= 0.99;
    this.velocityY *= 0.99;

    fill(this.hue, 60, 100);
    ellipse(this.x, this.y, this.radius, this.radius);
  }
}
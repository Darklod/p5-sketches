function setup() {
 createCanvas(600, 600);
}

function draw() {
 translate(width/2, width/2);
 background(0);
 for (var i = 0; i < 360; i++) {
    rotate(TWO_PI/360);
    stroke(255);
    var dist = randomGaussian(0,150);
    line(0, 0, dist, 0);
  }
}
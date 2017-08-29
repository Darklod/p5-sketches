var r = 170;
var c = 20;

function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL);
	angleMode(DEGREES)
}

function draw(){
	background(0);	
	rotateX(-80);
	translate(0, 1200, -1200)

	fill(255, 40 ,100);
	beginShape()
	for (var i = 0; i < 360; i++) {
		var x = r * cos(TWO_PI * i);
		var y = r * sin(TWO_PI * i);
		var z = i * c;
		vertex(x, y, z);
	}
	endShape();

	beginShape()
	for (var i = 0; i < 360; i++) {
		var x = r * cos(TWO_PI * i);
		var y = r * sin(TWO_PI * i);
		var z = i * c;

		var point = rotateZ3D({x:x,y:y,z:z},40);
		
		vertex(point.x, point.y, point.z);
	}
	endShape();

	for (var i = 0; i < 360; i+=2) {
		var x = r * cos(TWO_PI * i);
		var y = r * sin(TWO_PI * i);
		var z = i * c;
		var point = rotateZ3D({x:x,y:y,z:z},40);

		if(i%6==0) {
			fill(255, 0, 0)
		} else if(i%6==0) {
			fill(0, 255, 0)
		} else if(i%4==0) {
			fill(255, 255, 0)
		} else {
			fill(0, 0, 255)
		}

		beginShape()
		vertex(x, y, z);
		vertex(point.x, point.y, point.z);
		endShape();
	}
}

var rotateZ3D = function(point, theta) {
   var x = point.x;
   var y = point.y;

   point.x = x * cos(theta) - y * sin(theta);
   point.y = x * sin(theta) + y * cos(theta);

   return point;
};
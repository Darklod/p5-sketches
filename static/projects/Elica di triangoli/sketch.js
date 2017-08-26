function setup(){
	createCanvas(windowWidth,windowHeight, WEBGL);
}

function draw(){
	background(0);	
	rotateX(-40*PI/180);
	orbitControl();

	for (var i = 0; i < 30; i++) {
		fill(55, 30, map(i,0,30, 0,255));
		beginShape(TRIANGLE_STRIP);
		vertex(0, - i * 20 + 200, 0);
		vertex(100, - i * 20 + 200, 100);
		vertex(-100, - i * 20 + 200, 100)
		endShape();
		rotateY(60);
	}
}
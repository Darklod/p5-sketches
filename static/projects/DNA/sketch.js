function setup(){
	createCanvas(windowWidth,windowHeight, WEBGL);
}

function draw(){
	background(0);	
	orbitControl();

	sphere(100);
}
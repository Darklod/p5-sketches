function setup(){
	createCanvas(windowWidth,windowHeight);
}

function draw(){
	background(0);	
	translate(width/2, height/2);

	mouseX = -width/2  + mouseX;
	mouseY = -height/2 + mouseY;

	stroke(255,0,0);
	ellipse(mouseX, mouseY, 10, 10);

	//for (var i = 0; i < 100; i++) {
	var p = rotatePoint(mouseX, mouseY, map(60,0,360,0,TWO_PI));

	stroke(0,255,0);
	ellipse(p.x,p.y, 10, 10);	
	line(mouseX, mouseY, p.x,p.y);
	//}
}

function rotatePoint(x, y, angle) {
	x = x * cos(angle) - y * sin(angle);
	y = x * sin(angle) + y * cos(angle);

	return {x:x,y:y};
}
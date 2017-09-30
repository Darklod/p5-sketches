var _history = [];
var block = [];
var old;

function setup(){
	createCanvas(windowWidth, windowHeight);
	background(255);
}

function mouseDragged(){
	strokeWeight(4);

	if (old) {
		line(old.x, old.y, mouseX, mouseY);
	}
	old = {x: mouseX, y:mouseY};
	block.push(old);
}

function mouseReleased(){
	old = null;
	_history.push(block);
	block = [];
}
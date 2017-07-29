var cols, rows;
var cells = [];
var sz = 20;

var current;
var stack = [];

function setup(){
	createCanvas(600,600);
	cols = height/sz;
	rows = width/sz;

	for (var y = 0; y < cols; y++) {	
		for (var x = 0; x < rows; x++) {
			cells.push(new Cell(x,y));
		}
	}

	current = cells[0];
}

function draw(){
	background(0);
	//frameRate(5);
	for (var i = 0; i < cells.length; i++) {
		cells[i].show();
	}

	current.visited = true;
	current.highlight();

	var next = current.checkNeighbours();
	if(next){
		next.visited = true;

		stack.push(current);

		removeWalls(current,next);
		current = next;
	}else if(stack.length > 0){
		current = stack.pop();
	}
}
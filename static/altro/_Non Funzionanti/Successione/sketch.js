var cellSize = 15;
var padding = 0;

function setup(){
	createCanvas(windowWidth, windowHeight);
	
	var exp = "5 +(Math.log(100/n)*(2*n))/(1+ln(3*(n-1)))".replace("ln", "Math.log");
	
	background(255);
	stroke(150);

	for	(var x = 0; x < width - padding * 2 - cellSize; x+=cellSize) {
		for (var y = 0; y < height - padding * 2 - cellSize; y+=cellSize) {
			line(x + padding, y + padding, x + padding + cellSize, y + padding);
			line(x + padding, y + padding, x + padding, y + padding + cellSize);
		}
	}
	
	stroke(255, 0, 100);
	strokeWeight(7);
	for	(let n = 1; n < 100; n++) {
		point(padding + n * cellSize, height - padding - eval(exp) * cellSize);			
	}
}
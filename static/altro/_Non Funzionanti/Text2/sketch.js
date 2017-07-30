var font;

function preload(){
	font = loadFont('JeanSunHo.ttf');
}

function setup() {
	createCanvas(windowWidth,windowHeight);
}

function draw() {
	background(0);
	//translate(width/2,height/2);
	
	//fill(255,100,50);
	stroke(255,100,50);
	strokeWeight(2);
	noFill();
	
	
	textFont(font);	
	textSize(10);	
	textAlign(CENTER,BOTTOM);
	//text('abc',height,width/2);
	
	
	var pointsOfA = font.textToPoints('E',600,450,600,{sampleFactor:0.7});
	var pointsOfB = font.textToPoints('B',600,400,400,{sampleFactor:0.2});
	console.log(pointsOfA);
	
	beginShape(POINTS);
	for(var i = 0; i < pointsOfA.length - 1; i++){
		/*push();			
		beginShape();
		for(var i = 0; i < pointsOfB.length - 1; i++){
			vertex(pointsOfB[i].x, pointsOfB[i].y);
		}
		endShape();
		pop();*/
		vertex(pointsOfA[i].x, pointsOfA[i].y);
	}
	endShape();
	
	noLoop();
}

var letters = [];
var word = 'ufffii';

function setup() {
	createCanvas(windowWidth,windowHeight);
			
	for (var i = 0; i < word.length; i++){
		var points = new Letter(word[i].toUpperCase());
		letters.push(points);
	}
	
	console.log(letters);
}

function draw() {
	background(0);
	fill(250,50,50);
		
	translate(width/2,height/2);
	
	stroke(255);
	line(0,-height/2,0,height/2);
	line(-width/2,0,width/2,0);
	
	var space = 1;
	var paddingX = 200;
	var paddingY = 200;
	var letter_width = (width-paddingX)/letters.length;	
	var letter_height = (height-paddingY)/7;               
	
	var size = letter_width/(5 + space);
	
	var offsetX = -(width - paddingX)/2;   
	var offsetY = -letter_height/2;                      
	
	for(var j = 0; j < letters.length; j++){
		var points = letters[j];
		for(var i = 0; i < points.length; i++){
			rect(offsetX + points[i].x * size,offsetY - points[i].y * size,size,size);
		}
		offsetX += size * (5 + space);
	}
	
	noLoop();
}
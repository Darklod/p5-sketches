var particles = [];
var num = 300;
var colour;
var font;
var json;
var img;
var fontSize = 350;
var message="LOVE";

function preload(){
	font = loadFont('Chasing Hearts - TTF.ttf');
	json = loadJSON('heart.json');
}

function setup(){
	createCanvas(windowWidth,windowHeight);
	colour = 345 || parseInt(random(360));
	for	(var i = 0; i < num; i++){
		particles.push(new Particle(random(width),random(height),colour,0.5));
	}

	if (width > height){ fontSize = height; }
	img = createFontMask(message, font, fontSize, fontSize/1.5, '#FFF');
}

function draw(){
	background(170,0,75);

	for	(var i = 0; i < particles.length; i++){
		particles[i].update();
		particles[i].render();

		if(particles[i].death()){
			particles[i] = new Particle(random(width),random(height),colour);
		}
	}

  	translate(width/2, height/2);
	image(img, 0, 0);

	textSize(30);

	rotate(30);
	text("AUGURIIIII", 200, 300);

	rotate(30);
	text("BUON ANNIVERSARIO!", 200, 300);

	//rect(width/2-200,height/2-50,400,100);

	/*fill(255);
	textFont(font);
	textSize(100);
	text('I LOVE YOU',width/2,height/2);
	textAlign(CENTER,CENTER);*/

	//center line
	//stroke(255);
	//line(0,height/2,width,height/2);
	//line(width/2,0,width/2,height);
}

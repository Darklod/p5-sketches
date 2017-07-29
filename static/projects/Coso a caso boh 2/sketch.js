var particles = [];

function setup() {
	createCanvas(600,600);
	for (var i = 0; i < 5; i++) {
		for (var j = 0; j < 5; j++) {
			particles.push(new Particle(i*15, j*15));
		}
	}
	console.log(particles);
}

function draw() {
	background(0);
	translate(width/2,height/2);
	for (var i = 0; i < 25; i++) {
		push();
		rotate(particles[i].angle);
		particles[i].show();
		pop();
	}
}


/*function Particle(r, a) {
	this.radius = r;
	this.angle = a;

	this.x = this.radius * cos(this.angle);
	this.y = this.radius * sin(this.angle);

	this.show = function() {
		stroke(255);
		ellipse(this.x*10, this.y*10, 5, 5);
	}
}*/


function Particle(x,y){
	this.x = x;
	this.y = y;
	
	this.angle = atan2(x,y) * (180 / PI); 
	
	this.show = function() {
		stroke(255);
		ellipse(this.x, this.y, 5, 5);
	}
}
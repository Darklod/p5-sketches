var a = 0.4;
var u = 10;
var v = 20;

var wsqr;
var w;
var denom;

function setup(){
	createCanvas(windowWidth,windowHeight,WEBGL);
	
	wsqr = 1 - a * a;
	w = sqrt(wsqr);
		
	background(0);
	fill(255);
	
	sphere(50);
	
	beginShape();
	for(var i = 0;i < TWO_PI;i += HALF_PI/10){
		denom = a * (wsqr * pow(Math.cosh(a * u),2) + pow(a,2) * pow(a * sin(w * v),2));
		
		var x = -u + (2 * wsqr * Math.cosh(a * u) * Math.sinh(a * u) / denom);
		var y = (2 * w * Math.cosh(a * u) * (-w * cos(v) * cos(w * v) - sin(v) * sin(w * v))) / denom;
		var z = (2 * w * Math.cosh(a * u) * (-w * sin(v) * cos(w * v) + cos(v) * sin(w * v))) / denom;
		
		vertex(x,y,z);		
	}
	endShape();
}
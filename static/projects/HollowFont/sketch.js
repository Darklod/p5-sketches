var img,font,message="LOLL",fontSize;

function preload() {
  font = loadFont('assets/IndieFlower.ttf');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  fontSize = width >= height ? height * 1.2 : 100;
  
  img = createFontMask(message,font,fontSize, fontSize/2, '#FFF');
}

function draw() {
  translate(width/2, height/2);

  background(0,30,100);

  
  frameRate(5);
  for (var i = 0; i < 500; i++) {
    fill((i * 10) % 255, (i * 10) % 255,255,200);
    ellipse(random(-500,500),random(-500,500),50,50);
  }

  image(img, 0, 0);
}

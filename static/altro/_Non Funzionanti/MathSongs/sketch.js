var notes = [];
var trigger = 0;
var index = 0;
var duration = 200;
var osc;

function playNote(note, duration) {
  osc.freq(midiToFreq(note));
  osc.fade(0.5,0.2);

  if (duration) {
    setTimeout(function() {
      osc.fade(0,0.2);
    }, duration-50);
  }
}

function setup(){
	createCanvas(windowWidth, windowHeight);

  osc = new p5.TriOsc();
  osc.start();
  osc.amp(0);

	//	var pi = PI.toString().replace('.','');

	var pi = '31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'.slice(0,32);

	// var num = "";
	// for (var i = 0; i < pi.length; i++) {
	// 	if ((i+1) % 3 === 0) {
	// 		notes.push(parseInt(num));
	// 		num = "";
	// 	} else {
	// 		num += pi[i];
	// 	}
	// }

	for (var i = 0; i < pi.length; i++) {
		var midi = -1;

		switch (parseInt(pi[i])) {
			case 0: midi = 63; break;
			case 1: midi = 64; break;
			case 2: midi = 66; break;
			case 3: midi = 67; break;
			case 4: midi = 69; break;
			case 5: midi = 71; break;
			case 6: midi = 73; break;
			case 7: midi = 75; break;
			case 8: midi = 77; break;
			case 9: midi = 78; break;
		}

		if (midi != -1)
			notes.push(midi);
	}
	console.log(notes);
}

function draw(){
	background(0);

	if (millis() > trigger) {
		if (index % 4 === 0)
			duration = 500 * 0.1415;
		else
			duration = 500;
		playNote(notes[index % notes.length], duration);
		trigger = millis() + duration;
		index++;
	}

	translate(width/2, height/2);
	fill(255);
	textSize(42);
	text('31415926535897932384626433832795', 0, 0);
}

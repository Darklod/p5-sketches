var numbers = [3,5,7,1,2,6,10,4,8,9,2,5,6,1,8,4];
var block_size = 50;

function setup(){
	createCanvas(windowWidth,windowHeight);
}

var i, s, p, v, t, x, y;

l = 0;
r = numbers.length - 1;

i = 2;
s = [l, r];
k = 0;

function draw(){
	background(0);
	translate(width/2 - numbers.length * block_size / 2, height);
			
	for(var x = 0; x < numbers.length; x++){
		var col = map(numbers[x],1,10,0,360);
		fill('hsl('+ col +',100%,50%)');
		rect(x * block_size, -numbers[x] * block_size, block_size, block_size * numbers[x]);
	}
	
	 if (i > 0) {
        r = s[--i];
        l = s[--i];

        if (l < r) {
            // partition

            x = l;
            y = r - 1;

            p = l;
            v = numbers[p];
            numbers[p] = numbers[r];

            while (true) {
                while (
                    x <= y &&
                    numbers[x] != undefined &&
                    numbers[x][k] < v[k])
                    x++;
                while (
                    x <= y &&
                    numbers[y] != undefined &&
                    numbers[y][k] >= v[k])
                    y--;
                if (x > y)
                    break;
                t = numbers[x];
                numbers[x] = numbers[y];
                numbers[y] = t;
            }

            numbers[r] = numbers[x];
            numbers[x] = v;

            noLoop();

            s[i++] = l;
            s[i++] = x - 1;
            s[i++] = x + 1;
            s[i++] = r;
        }
    }
}

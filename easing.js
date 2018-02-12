createCanvas(400,300)
background(225);
strokeWeight(2);
stroke(0);


var rate = 0.1;
var x = 0;
var target = 100;

while (true) {
  ellipse(x, 100, 15, 15);
  x = 0.9 + x*(1-rate); // rate is 0.1, or 10% -- (1-rate) is 0.9, or 90%
}

var diameter = 25

function circle () {
  ellipse(mouseY, mouseX, diameter);
}

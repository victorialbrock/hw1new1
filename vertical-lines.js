createCanvas(400,300)
background(255);
strokeWeight(2);
stroke(0);

int (x = 0);
while(x < width) {
  line(x, 0, x, height);
  x = x + 20;
}

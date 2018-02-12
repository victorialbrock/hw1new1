createCanvas(400,300)
background(255);
strokeWeight(2);
stroke(0);


int (y = 0);
while(y < height) {
  line(0, y, width, y);
  y = y + 20;
}

createCanvas(300, 300);
background(255);
strokeWeight(1);
stroke(0);


int (x = 0);
while(x < height) {
  line(x, height, x, x);
  x = x + 20;
}

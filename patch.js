createCanvas(400,300)
background(0);
strokeWeight(2);
stroke(255);

int (y = 0);
while(y < height) {
int (x = 0);
while(x < width) {
fill(random(255));
rect(x, y, 20, 20);
y = y + 20;
x = x + 20;
}
}

int (x = 0);
while(x < width) {
  line(x, 0, x, height);
  x = x + 20;
}
 

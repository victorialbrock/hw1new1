createCanvas(400, 300);
background(0);
strokeWeight(1);
stroke(255);

int (y = 0);
while(y < height) {
int (x = 0);
while(x < width) {
ellipse(200, 150, y, x);
y = y + 20;
x = x + 20;
}
}

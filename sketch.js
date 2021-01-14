function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  rectMode(CENTER);

  noStroke();
  let c = color(0, 126, 255, 102);
  fill(c);
  rect(150, 150, 200, 200);
  let value = alpha(c); // Sets 'value' to 102
  fill(value);
}
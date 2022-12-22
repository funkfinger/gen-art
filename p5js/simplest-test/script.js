function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  for (let i = 0; i < width; i += 40) {
    for (let j = 0; j < height; j += 40) {
      drawSquare(i + 10, j + 10, 20, 20, random(0, 255));
      fill(random(0, 255), 204, 100);
    }
  }
}

function draw() {}

function drawSquare(x, y, height, width, color) {
  fill(color, 100, 100);
  rect(x, y, height, width);
}

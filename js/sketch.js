var actRandomSeed = 0;

function setup() {
  let c = createCanvas(900, 900);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  background('f1f1f1');
  randomSeed(actRandomSeed);

  let rectSize = 40;
  let tiles = 20;
  let overlap = 10;

  for (var gridY = 0; gridY < tiles; gridY ++) {
    for (var gridX = 0; gridX < tiles; gridX ++) {
      fill(274, random(0,100), random(0,100), 60);
      rect(width / tiles * gridX, height / tiles * gridY, random(30, rectSize + overlap), random(30, rectSize + overlap));
    }
  }
}

function mousePressed() {
  actRandomSeed = random(100000);
}

function keyPressed() {
  if (key == "s" || key == "S") saveCanvas('myCanvas', 'png');
}

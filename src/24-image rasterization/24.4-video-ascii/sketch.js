let video;
let rows, cols, cellH, cellW;
let chars;

function setup() {
  createCanvas(600, 600);

  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  rows = 40;
  cols = 60;
  cellW = width / cols;
  cellH = height / rows;

  chars = " ._:-+cab@XWÑ";
  textSize(cellH);
  textAlign(LEFT, TOP);
}

function draw() {
  background(20);
  fill(250);
  noStroke();
  video.loadPixels();

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellW;
      let y = j * cellH;
      let index = (x + y * video.width) * 4;
      let c = color(
        video.pixels[index],
        video.pixels[index + 1],
        video.pixels[index + 2],
        video.pixels[index + 3]
      );
      let b = brightness(c);
      let charSelector = int(map(b, 0, 100, chars.length, 0));
      text(chars.charAt(charSelector), x, y);
    }
  }
}

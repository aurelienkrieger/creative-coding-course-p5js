let imgBg, imgTop;

function preload(){
  imgBg = loadImage("../../assets/images/Northeaster by Winslow Homer.jpg");
  imgTop = loadImage("../../assets/images/Woman with green shawl by Cyprien Eugene Boulet.jpg");
}

function setup() {
  imgBg.resize(600, 0);
  imgTop.resize(imgBg.width, 0);
  createCanvas(imgBg.width, imgBg.height);
}

function draw() {
  image(imgBg, 0, 0);
  //blendMode(ADD);
  //blendMode(EXCLUSION);
  //blendMode(MULTIPLY);
  //blendMode(SCREEN);
  blendMode(OVERLAY);
  //blendMode(ADD);
  fill(255, 0, 0);
  image(imgTop, 0, 0);
  blendMode(BLEND);
}

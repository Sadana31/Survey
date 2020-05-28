var peopleCount = 0;
var database; 
var pic, picImg;
var pic2, pic2Img;

function preload () {
  picImg = loadImage("phone.png");
  pic2Img = loadImage("pphone1.png");
}

function setup(){
  database = firebase.database();
  canvas = createCanvas(1200,400);
  person = new Person();
  form = new Form();
  form.display();
  person.updateCount(peopleCount);

  pic = createSprite(20,200);
  pic.addImage("ph", picImg);

  pic2 = createSprite(1090,200);
  pic2.addImage("ph3", pic2Img);
}

function draw (){
  drawSprites();
}
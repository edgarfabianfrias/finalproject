function play() {
  var audio = new Audio('sounds/electrodiana.mp3');
  audio.play();
}


/* var audio = new Audio('sounds/electrodiana.mp3');
audio.play(); */


let theta = 0;
let img;

function preload(){
  img = loadImage('https://res.cloudinary.com/www-edgarfabianfrias-org/image/upload/v1606749729/background-flower-png-download-650650-free-transparent-spirit-peyote-png-900_660_p5zotd.jpg');

 
}
function mousePressed() { 
  getAudioContext().resume();
  console.log('clickStarted')
}




function setup() {
  createCanvas(500, 500, WEBGL);
  noStroke();
}

function draw() {
  background(0);
  
 
  rotateX(theta);
  rotateY(theta/3);
  rotateZ(theta/5);
  
  texture(img);
  sphere(100);
  theta+= 0.01;
}
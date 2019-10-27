let stars = [];

var num = 200;//number of stars
var distance=25; // min dist of connection
let flag=true; // flag to determine enlarge or narrow
var shine=[];
var shineNum=50;
var w=600;
var h=500;

function preload() {
 enlarge = loadSound('enlarge.mp3'); //sound
 narrow = loadSound('narrow.mp3');//soune
}
function setup() {
  createCanvas(w, h);
  colorMode(HSB);
  background(0); // black back ground
	for (let i = 0; i < num; i++) { // insert values to the array
		stars.push({
      x: w/2, //x location of the star
      y: h/2, //y location of the star
      dx: random(-2, 2), // increment
      dy: random(-2, 2) //increment
    });
	}
	for (let j = 0; j < shineNum; j++) { // insert values to the array
		shine.push({
      x: random(0,w), //x location of the star
      y: random(0,h), //y location of the star
    });
	}
	
	
enlarge.play();
}


function draw() {
  // HSB: fully orange (hue of 30, sat & bri at 100%), 0.03 opacity 
	
	background(0);
  stroke(0, 0, 120, 1);
		for (let k = 0; k < shine.length; k++) {
			point(shine[k].x,shine[k].y);
		}
		
		stroke(34, 92, 200, 2);
	for (let i = 0; i < stars.length; i++) {
    // for each circle
    let from = stars[i];
		for (let j = i+1; j < stars.length; j++) {
      let to = stars[j];
			if (dist(from.x, from.y, to.x, to.y) < distance) {
				line(from.x, from.y, to.x, to.y);//draw the line
               // point(from.x, from.y);
			}
		}
      if(flag){
      moveLarger(from);
      }else{
      moveSmaller(from)}

	}
}

function moveLarger(star) {
  star.x += star.dx;
  star.y += star.dy;
  

}
function moveSmaller(star) {
  star.x -= star.dx;
  star.y -= star.dy;

}

function mouseClicked(){
	
		for (let j = 0; j < shineNum; j++) { // insert values to the array
		shine[j].x=random(0,w);
		shine[j].y=random(0,h);
	}
  if(flag){
	  narrow.play();
  }else{
	  enlarge.play();
  }
  flag=!flag;
}

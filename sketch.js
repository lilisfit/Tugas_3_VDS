let galaxy
let matahari

function preload(){
  galaxy = loadImage("galax.jpg")
  loadImage("matahari.png")
}

// Set up canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
}

// Draw objects on canvas
function draw() {
  image(galaxy,0,0,windowWidth, windowHeight)
  drawSun();
  drawPlanets();
}

//Function to draw the Sun
function drawSun() {
  fill("yellow");
  noStroke();
  circle(width / 2, height / 2, 120);

}

// Function to draw the planets
function drawPlanets() {
  let planetDistances = [150, 200, 250]; // distance from the sun
  let planetSizes = [30, 50, 70]; // size of the planets
  let planetSpeeds = [0.01, 0.008, 0.005]; // speed of the planets
  
  for (let i = 0; i < planetDistances.length; i++) {
    let planetX = width / 2 + planetDistances[i] * cos(frameCount * planetSpeeds[i]);
    let planetY = height / 2 + planetDistances[i] * sin(frameCount * planetSpeeds[i]);
    fill('blue');
    noStroke();
    circle(planetX, planetY, planetSizes[i]);
  }
}

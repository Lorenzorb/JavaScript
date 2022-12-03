// Variabled to Modify
let angle = 1;
let magnitude = 1;
let radius = 1;
let dotSize = 10;
let outIterationLimit = 1;
let inIterationLimit = 1;


// Cool Combos
//let angle = 180;
//let magnitude = 0.1;
//let radius = 10;
//let dotSize = 10;

// Do not change
let x, y;
let px, py;
let i = 0;
let state = 0;
let outIteration = 0;
let inIteration = 0;


function setup() {
  createCanvas(500, 500);
  
  // Defining the center of our canvas
  x = width / 2;
  y = height / 2;
  background(0);
  //frameRate(1);
}


// Checking value to see if it is prime
function isPrime(value) {
  if (value == 1) return false;
  for (let i = 2; i <= sqrt(value); i++) {
    if (value % i == 0) {
      return false;
    }
  }
  return true;
}

// Code executed every frame
function draw() {
  fill(255, 0, 0);
  stroke(255, 0, 0);
  circle(x, y, dotSize * 0.5);
  
  
  // Incrementally defining the point at which the dot will appear on the
  // circles perimeter using this formula
  // x = CenterX + radius * cos(angle) ** multiplying the angle changes       //results
    
  px = x + radius * cos(i * angle);
  py = y + radius * sin(i * angle);

  if (isPrime(i)) {
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(px, py, dotSize * 0.5); 
  } else {
    fill(255);
    stroke(255);
    circle(px, py, dotSize * 0.5);  
  }
  i++;
    // Change State
  if (abs(radius) >= (height/2) || abs(radius) >= (width/2)) {
    outIteration++;
    state = 1;
  } else if (abs(radius) < magnitude){
    inIteration++;
    state = 0;
  }
  
  switch (state) {
    case 0:
      radius += magnitude;
      break;
    case 1:
      radius -= magnitude;
      break;
  }
  if (outIteration == outIterationLimit || inIteration == inIterationLimit) {
    noLoop();
  }
    

}

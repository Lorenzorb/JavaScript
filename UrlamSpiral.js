// Urlam's Spiral



// State of the Spiral
let x, y;
let px, py;
let step = 1;
let state = 0;
let numSteps = 1;
let turnCounter = 1;

// Scale/Resolution
let stepSize = 2;
let totalSteps;





// Function to test if a number is prime
function isPrime(value) {
  if (value == 1) return false;
  for (let i = 2; i <= sqrt(value); i++) {
    if (value % i == 0) {
      return false;
    }
  }
  return true
}



function setup() {
  createCanvas(500, 500);
  
  // Set up the spiral
  const cols = width / stepSize;
  const rows = height / stepSize;
  totalSteps = cols * rows;
  x = width / 2;
  y = height / 2;
  px = x;
  py = y;
  background(0);
  
}


function draw() {


if (isPrime(step)) {
  fill(255, 0, 0)
  stroke(255, 0, 0)
  circle(x,y, stepSize * 0.5);
} else if (step == 1) {
  
  fill(0, 0, 255)
  stroke(0, 0, 255)
  circle(x,y, stepSize * 0.5);
}
  // Move according to state
  switch (state) {
    case 0:
      x += stepSize;
      break;
    case 1:
      y -= stepSize;
      break;
    case 2:
      x -= stepSize;
      break;
    case 3:
      y += stepSize;
      break;
    
  }
  
  
  
  
  // Decide state
  if (step % numSteps == 0) {
    state = (state + 1) % 4;
    turnCounter++;
    if (turnCounter % 2 == 0){
      numSteps++;
    }
  }
  step++;
  
  if (step > totalSteps) {
    noLoop();
    console.log("Finished")
  }
}


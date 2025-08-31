// =========================
// PART 1: VARIABLES + CONDITIONALS
// =========================
let counter = 0; // variable to store current counter value
let colors = ["#FFB6C1", "#87CEEB", "#98FB98", "#FFD700", "#FFA07A"]; // array of colors

// Get references to DOM elements
let counterValue = document.getElementById("counter-value");
let incrementBtn = document.getElementById("increment-btn");
let decrementBtn = document.getElementById("decrement-btn");
let resetBtn = document.getElementById("reset-btn");
let colorBtn = document.getElementById("color-btn");
let animateBtn = document.getElementById("animate-btn");

// =========================
// PART 2: CUSTOM FUNCTIONS
// =========================

// Function #1: Update the displayed counter value
function updateDisplay() {
  counterValue.innerText = counter;

  // CONDITIONAL: Change counter color based on value
  if (counter > 0) {
    counterValue.style.color = "green";
  } else if (counter < 0) {
    counterValue.style.color = "red";
  } else {
    counterValue.style.color = "black";
  }
}

// Function #2: Change background color randomly
function changeColor() {
  // pick a random color from array
  let randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomIndex];
}

// =========================
// EVENT LISTENERS (DOM INTERACTIONS)
// =========================
incrementBtn.addEventListener("click", () => {
  counter++;
  updateDisplay();
});

decrementBtn.addEventListener("click", () => {
  counter--;
  updateDisplay();
});

resetBtn.addEventListener("click", () => {
  counter = 0;
  updateDisplay();
});

colorBtn.addEventListener("click", changeColor);

// =========================
// PART 3: LOOP EXAMPLE
// =========================
// Function #3: Animate the counter from current value to 10
function animateCounter() {
  // Use a for loop to count up to 10 with a delay
  let start = counter;
  for (let i = start + 1; i <= 10; i++) {
    setTimeout(() => {
      counter = i;
      updateDisplay();
    }, (i - start) * 300); // each step delayed by 300ms
  }
}

animateBtn.addEventListener("click", animateCounter);

// Initially display the counter
updateDisplay();

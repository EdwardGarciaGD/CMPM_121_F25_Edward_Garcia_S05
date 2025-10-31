// CMPM 121 Smelly Code Activity

let countTracker = 0;

// These constants are for button IDs and heading text
const a = "increment", b = "counter", h = "CMPM 121 Project";

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>${h}</h1>
    <p>Counter: <span id="${b}">0</span></p>
    <button id="${a}">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;

  // Get button elements from the document
  const buttonIncrement = document.getElementById(a);
  const buttonDecrement = document.getElementById("dec");
  const buttonReset = document.getElementById("reset");
  const counterSpan = document.getElementById(b);

  // Check if any element is missing, then exit the function
  if (!buttonIncrement || !buttonDecrement || !buttonReset || !counterSpan) {
    return;
  }

  // Add click event to the increment button
  buttonIncrement.addEventListener("click", () => {
    countTracker++;
    updateCounter(counterSpan);
  });

  // Add click event to the decrement button
  buttonDecrement.addEventListener("click", () => {
    countTracker--;
    updateCounter(counterSpan);
  });

  // Add click event to the reset button
  buttonReset.addEventListener("click", () => {
    countTracker = 0;
    updateCounter(counterSpan);
  });
}

function start() {
  // Call setup to initialize the UI
  setup();
}
// Start the counter app
start();

function updateCounter(button: HTMLElement) {
  // Update the counter display
  button.innerHTML = `${countTracker}`;
  document.title = "Clicked " + countTracker;
  // Change the background color based on even/odd count
  document.body.style.backgroundColor = countTracker % 2 ? "pink" : "lightblue";
}

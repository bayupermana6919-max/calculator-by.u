const display = document.getElementById("display");

// Append number/operator
function append(value) {
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

// Clear screen
function clearDisplay() {
  display.innerText = "0";
}

// Delete last character
function deleteLast() {
  if (display.innerText.length <= 1) {
    display.innerText = "0";
  } else {
    display.innerText = display.innerText.slice(0, -1);
  }
}

// Calculate result
function calculate() {
  try {
    let result = eval(
      display.innerText
      .replace("÷", "/")
      .replace("×", "*")
    );
    display.innerText = result;
  } catch (e) {
    display.innerText = "Error";
  }
}

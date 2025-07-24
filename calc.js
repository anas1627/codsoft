const expressionDisplay = document.getElementById('expression');
const resultDisplay = document.getElementById('result');

let expression = "";

function appendValue(value) {
  expression += value;
  updateDisplay();
}

function clearDisplay() {
  expression = "";
  resultDisplay.textContent = "";
  updateDisplay();
}

function deleteLast() {
  expression = expression.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  expressionDisplay.textContent = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    resultDisplay.textContent = result;
  } catch {
    resultDisplay.textContent = "Error";
  }
}

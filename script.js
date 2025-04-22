let currentInput = '';
let previousInput = '';
let operation = undefined;

const display = document.getElementById('display');

function appendNumber(number) {
  if (number === '.' && currentInput.includes('.')) return;
  if (currentInput.length > 12) return; // prevent overflow
  currentInput = currentInput.toString() + number.toString();
  updateDisplay();
}

function chooseOperation(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    compute();
  }
  operation = op;
  previousInput = currentInput;
  currentInput = '';
}

function compute() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = current === 0 ? 'Error' : prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString().slice(0, 13);
  operation = undefined;
  previousInput = '';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operation = undefined;
  updateDisplay();
}

function updateDisplay() {
  display.innerText = currentInput || '0';
}

updateDisplay();

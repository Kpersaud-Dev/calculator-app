// Variables

const display = document.querySelector('.display'),
      inputNumbers = document.querySelectorAll('.input-number'),
      previousOperandText = document.querySelector('.previous-operand'),
      currentOperandText = document.querySelector('.current-operand'),
      deleteBtn = document.getElementById('delete'),
      add = document.getElementById('add'),
      subtract = document.getElementById('subtract'),
      decimal = document.getElementById('decimal'),
      divide = document.getElementById('divide'),
      multiply = document.getElementById('multiply'),
      resetBtn = document.getElementById('reset'),
      equals = document.getElementById('equals');

// Capture values of number buttons
let capturedNumbers = [];

inputNumbers.forEach(
  inputNumber => inputNumber.addEventListener('click', e => {
    const capturedNumber = e.target.value;
    //Store number value in array
    capturedNumbers.push(capturedNumber);
    currentOperandText.innerText = capturedNumber;
    // Update Display
    updateDisplay();
  }))

// Display number value

const updateDisplay = () => {
  const convertedNumbers = capturedNumbers.join('');
  currentOperandText.innerText = convertedNumbers;
}



//Reset number value upon capturing number

const resetDisplay = () => {
  display.innerText = '';
}

// Addition Function

add.addEventListener('click', () => {
  const convertedNumbers = capturedNumbers.join('');
  previousOperandText.append(convertedNumbers);
  currentOperandText.innerText = 0;
  
  updateDisplay();
});

//Delete Button
deleteBtn.addEventListener('click', () => {
  capturedNumbers.pop();
  updateDisplay();
});

//Reset Button
resetBtn.addEventListener('click', () => {
  capturedNumbers = [];
  convertedNumbers = '';
  previousOperandText.innerText = convertedNumbers;
  updateDisplay();
});

//Decimal Button
decimal.addEventListener('click', () => {
  capturedNumbers.push('.');
  updateDisplay();
});
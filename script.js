const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

function calculate(expression) {
  try {
    // Evaluate safely
    const result = Function('return ' + expression)();
    return result;
  } catch (error) {
    return 'Error';
  }
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    if (value === 'C') {
      display.value = '';
    } else if (value === '=') {
      display.value = calculate(display.value);
    } else {
      display.value += value;
    }
  });
});

// Keyboard input handling
document.addEventListener('keydown', (e) => {
  if ((/[0-9\+\-\*\/\.]/).test(e.key)) {
    display.value += e.key;
  } else if (e.key === 'Enter') {
    display.value = calculate(display.value);
  } else if (e.key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (e.key.toLowerCase() === 'c') {
    display.value = '';
  }
});

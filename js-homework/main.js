function greet(name) {
  return `Hello ${name}`;
}

console.log(greet("viktor"));

// ================================================================

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

function searchNumber(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      console.log(array[i]);
    }
  }
}

searchNumber(numbers);

// ================================================================

function calculate(a, b, operator) {
  if (operator === 'plus') {
    return a + b;
  } else if (operator === 'minus') {
    return a - b;
  } else if (operator === 'multiply') {
    return a * b;
  } else if (operator === 'divide') {
    if (b === 0) {
      return 'Error: Division by zero';
    }
    return a / b;
  } else {
    return 'Error: Unknown operator';
  }
}

const result1 = calculate(2, 3, 'minus');
const result2 = calculate(6, 5, 'plus');
const result3 = calculate(3, 4, 'multiply');
const result4 = calculate(8, 2, 'divide');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

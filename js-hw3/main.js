for(i = 1; i <= 20; i++) {
  if(i % 4 === 0) {
    continue;
  }
  console.log(i);
}

// ===========

const number = +prompt("Введите число:");

if (isNaN(number) || number < 0) {
  alert("Введите корректное неотрицательное число!");
} else {
  let factorial = 1;

  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }

  alert(`Факториал числа ${number} равен ${factorial}`);
}

// ==============

for (let i = 0; i < 8; i++) {
  let row = "";
  for (let r = 0; r < 8; r++) {
    row += ((i + r) % 2 === 0) ? "# " : " ";
  }
  console.log(row);
}
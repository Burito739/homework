function calculateFinalPrice(basePrice, discountPercent, taxPercent) {

  const discount = basePrice * (discountPercent / 100);

  const priceAfterDiscount = basePrice - discount;

  const tax = priceAfterDiscount * taxPercent;

  const finalPrice = priceAfterDiscount + tax;
  return finalPrice;
}

const result = calculateFinalPrice(100, 10, 0.2);
console.log(result);

// ========

function checkAccess(name, pass) {
  if (name === "admin" && pass === 123456) {
    return "Доступ разрешён";
  } else {
    return "Доступ запрещён";
  }
}

const info = checkAccess("admin", 123456);
console.log(info);

// ============

function getTimeOfDay(num) {
  if (isNaN(num) || num < 0 || num > 23) {
    return "Некорректное время";
  } else if (num <= 5) {
    return "Ночь";
  } else if (num <= 11) {
    return "Утро";
  } else if (num <= 17) {
    return "День";
  } else {
    return "Вечер";
  }
}

const time = getTimeOfDay(20);
console.log(time);

// =================

function findFirstEven(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      return i;
    }
  }
  return "Нет четного числа"
}

console.log(findFirstEven(3, 10));
let number = 20;

if (number % 2 === 0) {
  console.log("чётное");
} else {
  console.log("нечётное");
};

// =======

const age = 25;

let discount = age < 18 ? 10 : age <= 65 ? 20 : 30;

console.log(`Скидка ${discount}%`)

// =======

let sale;

switch (true) {
  case age < 18:
    sale = 10;
    break;

  case age <= 65:
    sale = 20;
    break;

  default:
    sale = 30;
}

console.log(`Скидка ${sale}%`);

// =========

const username = prompt("Введите имя пользователя", "user")

const password = prompt("Введите пароль", "123456")

if (username === "user" && password === "123456") {
  console.log("Доступ разрешён")
} else {
  console.log("Доступ запрещён")
};

// =========

const weight = +prompt("Укажите вес посылки", "0")

const type = prompt("Укажите тип посылки. стандарт, экспресс или премиум", "стандарт")


if (weight <= 0 || isNaN(weight)) {
  alert("Некорректный вес посылки");
}

if (type !== "стандарт" && type !== "экспресс" && type !== "премиум") {
  alert("Неверный тип доставки")
}


let price;

if (weight > 0 && !isNaN(weight)) {
  price = weight < 1 ? 5 : weight <= 5 ? 10 : 15;
}

let coefficient;

switch (type) {
  case "стандарт":
    coefficient = 1;
    break;

  case "экспресс":
    coefficient = 1.5;
    break;

  case "премиум":
    coefficient = 2;
    break;

  default:
    alert("Тип доставки не определён");
    coefficient = 0;
}

if (price && coefficient) {
  const totalPrice = price * coefficient;
  alert("Итоговая стоимость доставки: " + totalPrice + "$");
}
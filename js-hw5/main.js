const person = {
  name: "Viktor",
  age: 24,
  isProgrammer: true,
}

console.log(person);

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

const check = isEmpty(person);
console.log(check)

// ==========

const task = {
  title: "work",
  description: 123,
  isCompleted: true,
}

const modifications = {
  isWorking: true,
}

function cloneAndModify(obj, mod) {
  const result = { ...obj, ...mod };
  for (const key in result) {
    console.log(key + ": " + result[key]);
  }
  return result
}

const result = cloneAndModify(task, modifications);

// ========

function callAllMethods(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "function") {
      obj[key]();
    }
  }
}

const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};

callAllMethods(myObject);

const user = {
  viktor: {
    age: 24,
    height: 180,
    sayHello(name) {
      console.log(`Hello ${name}`)
    }
  }
}
console.log(user.viktor)
user.viktor.sayHello(`Viktor`)

// =========================================================

const users = [
  {
    name: 'Tom',
    age: 25,
    isAdmin: true
  },
  {
    name: 'Andrew',
    age: 32,
    isAdmin: false
  },
  {
    name: 'Dmitry',
    age: 41,
    isAdmin: false
  }
];

let regularUserCount = 0;
for (let i = 0; i < users.length; i++) {
  if (!users[i].isAdmin) {
    regularUserCount++;
  }
}

console.log("Количество обычных пользователей:", regularUserCount);

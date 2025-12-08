const users = [
  { name: 'Alex', age: 24, isAdmin: false },
  { name: 'Bob', age: 13, isAdmin: false },
  { name: 'John', age: 31, isAdmin: true },
  { name: 'Jane', age: 20, isAdmin: false },
]

users.push({ name: 'Ann', age: 19, isAdmin: false }, { name: 'Jack', age: 43, isAdmin: true });

function getUserAverageAge(users) {

  let totalAge = 0;

  for (let i = 0; i < users.length; i++) {
    totalAge += users[i].age;
  }

  return totalAge / users.length;
}

console.log(getUserAverageAge(users));


function getAllAdmins(users) {
  const admins = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin) admins.push(users[i]);
  }
  return admins;
}

console.log(getAllAdmins(users));

// ===============

function first(arr, n) {
  if (n === undefined) {
    return [arr[0]];
  }

  if (n === 0) {
    return [];
  }

  const result = [];

  for (let i = 0; i < n && i < arr.length; i++) {
    result.push(arr[i]);
  }

  return result;
}

const test = first([1, 2, 3, 4], 2);
console.log(test)

const myPage = {
  name: 'Sergei',
  age: 40,
  height: 185,
  isAdmin: false,
  greet: function (name) {
    return `Hello ${name}`;
  }
}

console.log(myPage.greet('Sergei'))


const users = [
  {
    name: 'Alex',
    age: 25,
    isAdmin: false
  }, {
    name: 'John',
    age: 35,
    isAdmin: false
  }, {
    name: 'Oleg',
    age: 38,
    isAdmin: false
  }, {
    name: 'Ivan',
    age: 28,
    isAdmin: true
  }
]

let usersCount = 0

for (let i = 0; i < users.length; i++) {
  if (!users[i].isAdmin) {
    usersCount++;
  }
}

console.log(usersCount)






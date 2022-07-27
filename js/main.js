'use strict';
console.log('main.js');

const user1 = {
  firstName: 'James',
  lastName: 'Bond',
  age: 45,
  salary: 400000,
  getMonthlyPay: function () {
    const monthlyPay = (this.salary / 12).toFixed(2);
    console.log(`${this.firstName} Monthly salary is: 💸${monthlyPay}`);
    return monthlyPay;
  },
  fullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

// prideti metoda paskaiciuos menesini atlygi
// getMonthlyPay()  -21%

user1.fullName();
user1.getMonthlyPay();
// padaryri kad butu function expression
const fullName = function (someObj) {
  console.log(`${someObj.firstName} ${someObj.lastName}`);
};
// fullName(user1);

const addNums = (num1, num2) => num1 + num2;

let num11 = 5;

function change(sk) {
  sk = 10;
  console.log('sk vidue ===', sk);
}
change(num11);
console.log('num11 ===', num11);

//
const shape1 = {
  aukstis: 3,
  plotis: 10,
  gylis: 10,
  turis: function () {
    const volume = this.aukstis * this.plotis * this.gylis;
    console.log(`turis yra ${volume}m3`);
    return volume;
  },
};
shape1.turis();

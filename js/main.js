'use strict';
console.log('main.js');

const user1 = {
  firstName: 'James',
  lastName: 'Bond',
  age: 45,
  salary: 400000,
  fullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

// prideti metoda paskaiciuos menesini atlygi
// getMonthlyPay()  -21%

user1.fullName();

// padaryri kad butu function expression
const fullName = function (someObj) {
  console.log(`${someObj.firstName} ${someObj.lastName}`);
};
// fullName(user1);

const addNums = (num1, num2) => num1 + num2;

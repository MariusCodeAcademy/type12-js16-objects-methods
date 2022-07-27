'use strict';

const u1 = {
  firstName: 'James',
  lastName: 'Bond',
  age: 45,
  sizes: ['S', 'M', 'L'],
};

// sukurti globalu kintamaji firstName = user1 .firstName
// atskirai
// const firstName = u1.firstName;
// const lastName = u1.lastName;
// const sizes = u1.sizes;

// objekto destrukturizacija
// const { firstName, lastName, sizes } = u1;

// objekto destrukturizacija su pervadinimu
const { firstName, lastName, sizes: dydziai } = u1;

console.log(`${firstName}, ${lastName}, sizes: ${dydziai}`);

// level 1 destruct
// function printSizes(obj) {
//   const { firstName, lastName, sizes } = obj;
//   console.log(`${firstName} ${lastName}`);
//   sizes.forEach((size) => console.log(`dydis ${size}`));
// }

// level 2 destruct
function printSizes({ firstName, lastName, sizes }) {
  console.log(`${firstName} ${lastName}`);
  sizes.forEach((size) => console.log(`dydis ${size}`));
}

printSizes(u1);

// masyvu destruct

const getColors = () => ['red', 'green', 'blue'];

const colors = getColors();

// const firstColor = colors[0];
// const secondColor = colors[1];

const [firstColor, , lastColor] = colors;

console.log('firstColor, secondColor ===', firstColor, lastColor);

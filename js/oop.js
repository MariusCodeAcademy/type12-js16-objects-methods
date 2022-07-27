'use-strict';
// sukuriam klase
class User {
  constructor(vardas, pavarde, metinisAtlygis) {
    this.firstName = vardas;
    this.lastName = pavarde;
    this.salary = metinisAtlygis;
    this.createdAt = new Date().toLocaleTimeString();
  }

  // metodas
  fullName() {
    const nameString = `${this.firstName} ${this.lastName}`;
    console.log(nameString);
    return nameString;
  }

  getMonthlyPay() {
    const monthlyPay = (this.salary / 12).toFixed(2);
    console.log(`${this.fullName()} Monthly salary is: 💸${monthlyPay}`);
    return monthlyPay;
  }
}

const u1 = new User('James', 'Bond', 100000);
const u2 = new User('Mike', 'Tyson', 452220);
const u3 = { firstName: 'Serbentautas', lastName: 'Bordiuras', salary: 890000 };

[u1, u2, u3].forEach((uOb) => console.log(uOb instanceof User));

u2.fullName();
u2.getMonthlyPay();

u2.town = 'kaunas';
// console.log('u1 ===', u1);
// console.log('u2 ===', u2);
// console.log('u3 ===', u3);

// const now = new Date();

const userArr = [
  {
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
  },
  {
    firstName: 'Mike',
    lastName: 'Tyson',
    age: 28,
    salary: 250000,
    getMonthlyPay: function () {
      const monthlyPay = (this.salary / 12).toFixed(2);
      console.log(`${this.firstName} Monthly salary is: 💸${monthlyPay}`);
      return monthlyPay;
    },
    fullName: function () {
      console.log(`${this.firstName} ${this.lastName}`);
    },
  },
  {
    firstName: 'Serbentautas',
    lastName: 'Bordiuras',
    age: 35,
    salary: 890000,
    getMonthlyPay: function () {
      const monthlyPay = (this.salary / 12).toFixed(2);
      console.log(`${this.firstName} Monthly salary is: 💸${monthlyPay}`);
      return monthlyPay;
    },
    fullName: function () {
      console.log(`${this.firstName} ${this.lastName}`);
    },
  },
  {
    firstName: 'Norma',
    lastName: 'Kadanors',
    age: 48,
    salary: 990000,
    getMonthlyPay: function () {
      const monthlyPay = (this.salary / 12).toFixed(2);
      console.log(`${this.firstName} Monthly salary is: 💸${monthlyPay}`);
      return monthlyPay;
    },
    fullName: function () {
      console.log(`${this.firstName} ${this.lastName}`);
    },
  },
];
// userArr
// prasukti cikla ir atspausdinti visus menesinius atlyginumus
userArr.forEach((uObj) => {
  uObj.getMonthlyPay();
});
// prasukti cikla ir grazinti visus menesinius atlyginumus
const menesiniaiArr = userArr.map((uObj) => {
  return uObj.getMonthlyPay();
});
console.log('menesiniaiArr ===', menesiniaiArr);

// grazinti nauja objektu masyva kuriame butu tik vardas ir menesinis atlyginimas
// [
//   { firstName: 'Norma', monthlyPay: 82500.00 }
// ];
const nameAndPay = userArr.map((uObj) => {
  return {
    vardas: uObj.firstName,
    menesinis: uObj.getMonthlyPay(),
  };
});
console.log('nameAndPay ===', nameAndPay);

// grazinti visu zmoniu bendra vidutini menesini atlygi

// [1, 2, 3]

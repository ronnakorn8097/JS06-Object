// - ให้สร้าง Object calculator ซึ่งมี 3 method 
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง


let calculator = {
    number1 : null,
    number2 : null,
  read () {
        this.number1 = +prompt("Enter Number 1");
        this.number2 = +prompt("Enter Number 2");
  },
   sum () {
    return this.number1 + this.number2;
   },
   mul () {
    return this.number1 * this.number2;
   },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());


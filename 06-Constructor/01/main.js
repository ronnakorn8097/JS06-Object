// ให้สร้าง Object calculator ซึ่งมี 3 method  (ให้ใช้วิธี Constructor Function)
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง

function Calculator()
{
    this.read = function(){
        this.number1 = +prompt('Enter Number 1');
        this.number2 = + prompt('Enter Number 2');
    };
    this.sum = function()
    {
        return this.number1+this.number2;
    };
    this.mul = function()
    {
        return this.number1 * this.number2;
    };
}
const calc = new Calculator();
calc.read();
console.log(`Show Number 1 = ${calc.number1}`);
console.log(`Show Number 1 = ${calc.number2}`);
console.log(`Result of ${calc.number1} x ${calc.number2} = ${calc.mul()}`);
console.log(`Result of ${calc.number1} + ${calc.number2}  = ${calc.sum()}`);

// ให้สร้าง Constructor Function: Accumulator(startingValue) 
// - มี property ชื่อ currentValue ไว้เก็บค่าสะสม (มีค่าเท่ากับ startingValue ตอน Object ถูกสร้าง)
// -  มี method  read() ให้รับค่า input และให้บวกเข้ากับค่า currentValue
// -  มี method  show() ให้ alert ค่า currentValue

function Accumulator(startingValue=0) // กำหนด defalut parameter ให้ = 0 ป้องกัน undefined
{
    this.currentValue= startingValue;
    this.read = function()
    {
        let inputSum = +prompt("Enter Number");
        this.currentValue +=inputSum;
    }
    this.show = function()
    {
        alert(`${this.currentValue}`);
    }

}

const accmulator = new Accumulator() // ใส่ argument ตรงนี้ 0 ได้ ถ้าไม่ใส่ จะ return เป็น undefined

accmulator.read();
accmulator.read();
// accmulator.read();
// accmulator.read();
// accmulator.read();
// accmulator.read();
accmulator.show();


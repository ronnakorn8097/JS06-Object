// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง  
// โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number)   
// โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย

const TERMINATE = 'stop';
const fruit = {};

let key;
let value;

do {
    key = prompt('Enter fruit');
    value = prompt('Enter Qty');

    if(value ==1)
    {
        fruit[key] = value;
    }
    else if(value > 1)
    {
        fruit[`${key}s`] = value;
    }

} while(key != TERMINATE && value != TERMINATE);

console.log(fruit);
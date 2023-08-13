console.log('learn object');

// data type
 // Primitive : Boolean , number,string , etc.....
 // non-primitive : object

//##################################
 //หัวข้อ  Object Declaration
 //##################################
 // {} == ใช้แทน object / scope / 
          // สิ่งที่อยู่เป็นกลุ่มก้อนเดียวกัน
// {record_1 , record_2,record_3,...}
//ในแต่ละ record => <key_name>:<value>
// <key_name> Data type : string
//<value> เป็น datatype อะไรก็ได้ (string , number , boolean ,...)
// ในแต่ละ record === propotiy (คุณสมบัติ , สิ่งที่้มี) == key-value pair

// object นี้มี 5 record ดูตามเครื่องหมาย ,
let user = {
    firstName : 'ToR',
    lastName : 'ABC',
    age : 28,
    isAdmin:true,
    'like human': true, // ใส่ '' เมื่อ key value เป็นช่องว่าง
};



//##################################
// ## Access , Modify , Delete
//##################################

// every action ต้องการ <key_name>!!!!!
// dot notation <obj>.<key_name> == <value>
// ข้อจำกัด เข้าถึง key ที่มี space ไม่ได้
// ถ้าไม่มี record => return undefiend
//ถ้า <obj>.<key_name ไม่มีอยู่จริง> จะเป็น undefiend


// get, poll การ read ข้อมูล
// console.log(user);
// console.log(user.firstName); // ToR
// console.log(user.firstName === 'ToR'); // true แสดงแบบ boolean

// console.log(user.lastName);
// console.log(user.age);
// console.log(user.isAdmin);
// console.log(user.salary);
// console.log(user["like human"]);

// Modify , Update
//Syntax : <obj>.<old key_name> = newValue
user.firstName = 'Pravit'; // คล้ายๆกับการ reassign
user.age = 25;
user.age += 2;
user.age++;

// console.log(user.age);


// การเพิ่ม ADD
// syntax : obj.new_key = newValue
user.address = 'Bangkok'; // ถ้า key ที่ไม่มีอยู่ แต่มีค่า value จะกลายเป็นค่าใหม่
// console.log(user)

// Delete 
// Syntax : delete <obj>.<keyName>
delete user.isAdmin;
console.log(user);

//##################################
// ## Nested object
//##################################

const employee = {
    fullName : 'John Doe',
    salary : 500_000,
    address : {    // address เก็บเป็น object
        district : "Phaya Thai",
        province : 'Bangkok',
        country : 'Thailand',
    },
}

// Access , Modify, delete
console.log(employee.salary);
console.log(employee.address);
console.log(employee.address.province);
console.log(employee.address.district);
console.log(employee.address.village); // undefined

employee.address.province = 'Nonthaburian';
delete employee.address.country;

//dot ใช้กับ object เท่านั้น !! <obj>.<key>
// ห้ามมมมมมมมมมมมมมมม ใช้กับ undefined <undefined>.<key>
// วิธีแก้ optional chaining => <undefined>?.<key>


console.log(employee.addr); // undefined

// console.log(employee.addr.province); // undefined.provincd => error
// console.log(employee.addr?.province);
console.log(employee.address?.province);
console.log(employee.address?.village); // unedefined 

//##################################
// ## check key ?
//##################################

const product = {
    id:227,
    name:'Iphone',
    price : 50_000,
    // discount : 0.05,

}

console.log(product.discount);

// IN Operator
// Syntax : <Key_name_string> in <object> => true ,false
// 'name' in product // => true , false
console.log('name' in product);
console.log('discount' in product);

// method hasOwnProperty
// Syntax : <obj></obj>.hasOwnProperty(<key_name>) => true , false
console.log(product.hasOwnProperty('name'));
console.log(product.hasOwnProperty('discount'));

//##################################
// ## Bracket Notation ['key']
//##################################

//syntax : <obj>["<key_name_string>"]
// ** 1 ใช้ bracket เมื่อไหร่ ชื่อ key ข้างในต้องเป็น string 
// ** 2 ถ้าไม่ใช่ string ต้องเป็น ตัวแปรที่เก็บ string // computed key
// access key value ผ่านชื่อตัวแปร ได้
console.log(product.id);
console.log(product['id'])
// product.id
// product['id']
product['name'] = 'Iphone-15';
console.log(product);

let aaaaa = 'name';
console.log(product[aaaaa]);
console.log(product['name']);

console.log(product.aaaaa);  // === product['aaaaa'] === undefined
// undefined // dot ต้องเป็นชื่อ ตัวแปร เท่านั้น

//##################################
// ## Property ShortHand
//##################################

let username = prompt("Enter username");
let email = prompt("Enter email");
let password = prompt("Enter password");

// let user = {
//   username: username,
//   email: email,
//   password: password,
// };

// property shorthand
// สามารถทำได้เมื่อชื่อ key ตรงกับชื่อตัวแปรใน value

let user = {
  username, // value in username variable
  email,
  password,
};
console.log(user);


/////////// object  สรุป/////////////


const user = {
    name: 'john',
    age: 33,
    isMarried: false,
    address : {
        village : 'ladda land',
        province : 'Change Mai',
    },
 }






 // Get Data

 log(user.name);
 log(user['name']);

 let a = 'name';
 log(user.a); // วิ่งไปหา key a => undefiend
 log(user[a]); // user['name] => John

 // เมื่อชื่อ key ถูกเก็บไว้ในตัวแปร ต้อง access ผ่าน []


 // delete data 

// delete user.isMarried;
log(user);

// delete user['age'];
log(user);

let b = 'address';
// delete user[b];
log(user);


// update 
let x =5;
x = x + 2;
x +=2;
// container = value + 2


user.age = user.age + 1; // age 34 
user.age += 1; 
log(user.age); // 35
// container = value + 1


user['age'] = user['age'] + 5;
log(user.age);

user['age'] += 5;
log(user.age);

user['age']++;
log(user.age);


// user key variable

let key = ' age ';

// computed key
user[key] = user[key] +5;
//user['age] = user['age'] + 5;
log(user.age);

user[key] += 1;
user[key]++;



// จุดสำคัญ

// bracket notation ใช้กับ key ที่เป็น string หรือ ตัวแปรที่เป็น string 
// for (<key> in <obj>) [js จะ auto reassign key ใหม่ทุกรอบ(string)]
// obj[key] = obj[key] + newValue => container = value + new




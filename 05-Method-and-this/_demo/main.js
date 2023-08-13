const log = console.log;

// log('Medthod and this keyword');

// // #################################################//

// //object === collection of properties and/or method
// // ในแต่ละ record เรียกว่า called property
// // ในแต่ละ property เรียกว่า <key>:<value>

// //some record => <key>:<FN>
// // called method === ความสามารถ Object


// // const programmer = { // 2 property 1 record
// //     name:'Tor', // 1 property
// //     age: '28', // 1 property
// //     dev: devWebsite, // 1 method
// //     meet : meeting,
// //     sleep : sleeping,
// // };

// // function devWebsite()
// // {
// //     console.log('Im working');
// // }

// // function meeting(){
// //     console.log("im meeting");
// // }

// // function sleeping()
// // {
// //     log("Im sleeping");
// // }

// // // property
// // // syntax <obj>.<key>
// // log(programmer.name);
// // log(programmer.age);

// // // programmer.dev // devWebsite
// // // method ความสามารถของ object
// // // Syntax : <obj>.<method>()
// // programmer.dev() // ใช้ method ต้องมี ()
// // programmer.meet()
// // programmer.sleep()

// // #################################################//
// // ###########2. Alternative Syntax##################//

// const programmer = {
//     name :'John',
//     age : 38,

//     dev: function () { // เขียนแบบ anonymous function
//         console.log('Im working');
//     },

//     meet:()=> console.log('Im meeting'), // เขียนแบบ arrow function

//     sleep() { // method shortHand
//         console.log("Im sleeping")
//     },
//     // sleep:()=>console.log("Im sleeping")
// };

// programmer.dev()
// programmer.meet()
// programmer.sleep()
// /////////////////////////////////////////////////////////
// // mini=lab
// // สร้าง object ของตัวเอง
// // ระบุคุณสมบัติ 2-3 ข้อ
// // ระบุความสามารถตัวเอง สัก 3 ข้อ (cover ทุก syntax)
// // key: nameFunction
// // key : anonymous function
// // key : arrowFN
// // Key : ShortHand

// function playfootball (){
//     console.log('Im playing football');
// }

// function playSport(sport)
// {
//     console.log(`Im playing ${sport}`)
// }

// const me = {
//     nickName : 'Tor',
//     age:28,
//     hair : 'black',
//     gender : 'Male',
//     sport : playSport,
//     football : playfootball,
//     sleepAllday : function() {
//         console.log('im sleeping');
//     },

//     eatAllNight : (menu)=> console.log(`Im eating ${menu}all the night`),
//     focus(task) {
//         console.log(`Im working ${task} in focus mode`);
//     },
// }

// me.football();
// me.sport('Basketball');
// me.sport();
// me.sleepAllday();
// me.eatAllNight('Tax');
// me.focus('Javascript lab');
// ///////////////////////////////////////////////////
// //OOP : object oriendted program

// const car = {
//     brand : 'Tesla',
//     model : 'x',
//     speed : 80,
//     drive:()=> console.log('Diving'),
//     'auto pilot': ()=>console.log("self diving"),
// };
// car = 1;
// const calculator = {
//     sum : (x,y) => x+y,
//     minus : (x,y)=> x-y,
// };

// log(car.speed);
// car.speed = calculator.sum(car.speed,20);
// log(car.speed);

// console.log(car.brand,car.model);
// car.drive();
// car['auto pilot']();
// /////////////////////////////////////////


// let r1 = calculator.sum(5,7);
// let r2 = calculator.minus(5,7);
// log(r1,r2);

// ////////////////////////////////////////

// /////////############### 4.This Keyword //////////////////
// //JS Keyword : if-else , for, while,do,switch,this

// const user = {
//     name : 'codecamp',
//     age : 15,
//     sayHi : function () {
//         console.log(`Hello ${this.name}`);
//     },
//     growold : function () 
//     {
//         // console.log(this);
//         // this == user , this.age === user.age
//         this.age++;
//     }
// };

// user.sayHi(); // hello codecamp
// user.name = 'software park';
// user.sayHi(); // hello software park

// log(user.age);
// user.growold();
// log(user.age);

// Q : ค่าของ this ถูก solve ตั้งแต่ที่เขียน function รึเปล่า ?
//  A : ไม่
// this มีค่าเท่ากับ object ???/
// this == dynamic caller / dynamic context

//// ตัวอย่าง 1
// function dev()
// {
//     console.log(`This feature developer by ${this.name}`);
// }

// const programmer1 = {
//     name : 'John',
//     develop : dev,
// };
// const programmer2 = {
//     name : 'Jane',
//     develop : dev,
// };

// // A : this ถูก solve ตอนเรียกใช้ method
// // caller.method => this => caller == object before the dot
// programmer1.develop();
// programmer2.develop();

////////////////////////////////////////////
// ตัวอย่าง 2

function dev(feature)
{
    console.log(`${feature} developer by ${this.name}`);
}

const programmer1 = {
    name : 'John',
    develop : dev,
};
const programmer2 = {
    name : 'Jane',
    develop : dev,
};
//checkpoint -1 : this หมายถึง object ที่เรียกใช้ method
programmer1.develop('login');
programmer2.develop('register');


// ##########################################
// ########### 5. Execution Context == Caller
// ##########################################

// Global(Browser)  Context : window object
// window.alert("I'm Global");
// this.alert("I'm Global this");
// alert("I'm execute in window");

// FN Declaration จะทำให้ sayHi ไปติดใน windowObj
// Hoisting
function sayHi() {
    console.log(this); // window
}
var a = 'm';

// Execute Context = Window
// window.sayHi();
// this.sayHi();
// sayHi();

// Function Context
var name = 'Codecamp';
function sayHello() {
    console.log(this.name);
}

// Window Caller
sayHello();
window.sayHello();

const user = {
    name: 'John',
    say: sayHello,
    scream: () => {
        console.log(`scream by ${this.name}`);
    },
    srcm: function () {
        console.log(`scream by ${this.name}`);
    },
};

// user Caller
user.say();
// SUMMARY : this == Object Caller

// Arrow ไม่มีความสามารถในการสร้าง Context
// Loose Context => Chain to Window
user.scream(); // dont use this keyword with arrow function
user.srcm();

// LAB

// let calculator = {
//     read() {
//         this.x = +prompt('Enter num1'); // line276 : calculator.x = +prompt()
//         this.y = +prompt('Enter num2'); // line276 : calculator.y = +prompt()
//     },
//     sum() {
//         return this.x + this.y;
//     },
//     mul() {
//         return this.x * this.y;
//     },
// };

// log(calculator);

// calculator.read();
// log(calculator);
// log(calculator.sum());
// log(calculator.mul());
















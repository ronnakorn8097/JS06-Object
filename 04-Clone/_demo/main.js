const log = console.log;

log('Object Clone');

let todo = {
    task : 'Do Hw',
    complete : false,
    due_date: '13-08-2023',
};

// const newTodo = todo;
// newTodo.complete = true;
// log(todo.complete);


//clone 
// const newTodo = {}
// วิธี 1.เอาต้นแบบมา loop แล้ว assign ทีละ key value ให้ object ใหม่

// for(let key in todo)
// {
//     // assign ทีละ key:value ให้ newTodo
//     newTodo[key] = todo[key];
//     // newTodo['task] = todo['task]; => 'Do Hw'
//     // newTodo['complete] = todo['conmplete]; => 'false'
//     // newTodo['due_date] = todo['due_date']; => '13-08-2023'
// }

// log(newTodo)
// newTodo.complete = true;
// log(newTodo.complete);
// log(todo.complete);


////////////////////////////////////////////////////////////////////
// วิธีที่ 2 object.assign(dst, [src1,src2,.....srcN])
//return address ของ destination (para 1)

// วิธีืี่ 2A
// const newTodo = {}

// const newTodo = {
//     complete : true,
// };
// Merge มันจะเขียนทับด้วย direction : right -> left
// ถ้ามี property ซ้ำกัน จะเอา ขวา ทับซ้าย อยู่ดี

// let todo = {
//     task : 'Do Hw',
//     complete : false,
//     due_date: '13-08-2023',
// };
// Object.assign(newTodo,todo) // evaluate ขวาไปซ้าย


// วิธีที่ 2B
const newTodo = Object.assign({},todo);
log(newTodo);

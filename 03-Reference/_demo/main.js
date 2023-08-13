const log = console.log;

log('Ref');

// copied by value 
// copy by reference

// Primitive
let message = 'Hello';
let word = message;

log(message);
log(word);

message = 'Hi';
log(message); // =. hi เพราะ ถูก reassign ค่าใหม่
log(word); //  => Hello เพราะยังเก็บค่าเก่า 


// object
//non-promitive object
let user = {
    name : 'John',
    age : 33,
};


 // ** copied by ref
 // assign address ของ user ให้กับ employee
 let employee = user;


 // ขอ code เพิ่ม
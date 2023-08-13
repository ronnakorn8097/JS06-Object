/////////// object /////////////


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
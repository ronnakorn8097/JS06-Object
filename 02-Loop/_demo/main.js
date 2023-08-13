const user = {
    firstName: 'codecamp',
    lastname : 'software park',
    age:15,
    key : 'JaAee',
};

// for IN : loop througn object
// for (let <key> in <obj>) {}
for(let key in user){
    // let key = 'firstName' รอบ 1
    // let key = 'lastName' รอบ 2
    // let key = 'age' รอบ 3
    console.log(key); // auto dynamic assign by js in <string>

    // ข้างบน จะ return มาเป็น 'firstName','lastName','age'
    console.log(user[key]);
    // รอบแรก : user[key] == user['firstName'] ==> codecamp
    // รอบสอง : user[key] == user['lastname'] ==> software park
    // รอบสาม : user[key] == user['age'] ==> 15
    
    console.log(user.key)
    //รอบแรก : user.key == user['key'] => undefined
    //รอบสอง : user.key == user['key'] => undefined
    //รอบสาม : user.key == user['key'] => undefined
}


// เอา code เพิ่ม
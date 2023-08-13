// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร


let user = {
  name: 'John',
  sayHi: function () {
    console.log(this.name);
    // return this.name;
  }
};

(user.sayHi)(); // * John 
// object user เรียกใช้ key function sayhi 
// this.name => john เพราะ this สามารถใช้ใน scope ในตัวมันได้
console.log(user.sayHi()); //undefined
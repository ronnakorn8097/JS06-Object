// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

var name = 'Joe';

// function declaration
function makeUser() {
  return {
    name: 'John',
    ref: this
  };
}
let user = makeUser(); // ถูกเรียกจาก windows
console.log(user.ref.name); // * Joe // user.this.name
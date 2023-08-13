// จงสร้างตัวแปรชื่อ person ซึ่งเก็บข้อมูลประเภท Object และมี property 5 ชุด ซึ่งเป็นข้อมูลของผู้เรียน ได้แก่ ชื่อ, อายุ, เพศ, ที่อยู่, เบอร์โทร

const person = {
    fullName : 'Ronnakorn Fa',
    age : 28,
    gerder : 'Male',
    address : {
        district : "Phaya Thai",
        province : 'Bangkok',
        country : 'Thailand',
    },
    tel : '081234567',

};

console.log(person);
console.log(person.age);
console.log(person.tel);
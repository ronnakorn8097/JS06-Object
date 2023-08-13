const user = { name: 'Jack', role: 'ADMIN' };
const admin = { name: 'Jack', role: 'ADMIN' };
console.log(user === admin); // * false เพราะคนละ object

// user และ admin เก็บคนละ address กัน 
// เหมือน บ้าน จัดสรรค์ หน้าตาเหมือนกัน แต่ข้างในไม่เหมือนกัน คตนละ address
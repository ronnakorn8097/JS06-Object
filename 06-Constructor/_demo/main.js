const log = console.log;

log('Constructor Fy=unction');

const dev1 = {
    name: 'John',
    age:32,
    role: 'dev',
    salary : 40_000,
    dev : function()
    {
        console.log("Im developer some feature");
    },
}

// object creators == constructor Function

function Developer(name,age) {// ขึ้นต้นด้วยตัวใหญ่ถ้าเราจะสร้าง function
    // this = {}
    this.name = name,// {name:'tor'}
    this.age = age, // {name:'tor' ,age:20}
    this.role ='dev'; // {name:'tor' ,age:20,role: 'dev'}
    this.salary = 40_000; // {name:'tor' ,age:20,role: 'dev',salary:40_000 }
    this.dev = function ()
    {
        console.log(`${this.name} developer some feature`);
    }; // {name.......,dev:fn()}
    // Implicit Return this
    // return {name......,dev:fn()}
}

const dev2 = new Developer('tor',20); // ถ้าไม่มี new จะเป็น undefiend
log(dev2);
dev2.dev();

const dev3 = new Developer('Jame',50);
log(dev3);
dev3.dev();




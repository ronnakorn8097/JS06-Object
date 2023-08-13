// - ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์  

// - นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด  

// - สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)

const log = console.log;
// sub program-1 : Input

// วิธีที่ 1
// let name = 'Hermes';
// let quantity = 20;
// let price = 500_000;
// let discount = 0.1;

// วิธีที่ 2
let name = prompt('Enter Product Name');
let quantity = +prompt('Enter Quantity');
let price = +prompt('Enter Price');
let discount = prompt('Enter Discount') * 1; // แปลงเป็น number




// sub program-2 : Create Object
// const products = {
//     name : name, // ตัวแปร name : 'Hermes'; 
//     quantity : quantity, // quantity : 20;
//     price : price ,// price : 500_000
//     discount : discount, // discount: 0.1
// };
//เมื่อชื่อ key ตรงกับ ชื่อ ตัวแปร ที่เก็บ value สามารถยุบ syntax ได้ (property shortHand)


const product = {
            name,
    quantity,
    price,
    // discount,
};


if(discount != 0)
{
    product[discount] = discount;
}

console.log(product);



//sub program-3 : Calvulate Price
// discount 10% , padi 90%
// discount 0.1 , paid 0.9
// ต้องการ price ออกมา อะไรบ้างที่่ต้องมี parameter มาคำนวณ
// price ,quantity,discount => totalPrice


// วิธีที่ 1
// function calPrice(price ,quantity,discount)
// {
//     let totalPrice = price * quantity * (1-discount);
//     //              100 * 10(1-0.1) = > 1000(0.9) => 900

//     return totalPrice;
// }

// let result = calPrice(product.price,product.quantity,product.discount)
// console.log(result);


// วิธีที่ 2 

function calPrice(productObj)
{
    let price = productObj.price;
    let quantity = product.quantity;
    let discount = product.discount ? product.discount : 0;

    return price * quantity * (1-discount);
}
let result = calPrice(product);
// let result = calPrice({name,price ,quantity,discount});

console.log(result);


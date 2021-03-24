var number = prompt("กรุณากรอกเลขที่ต้องการซื้อ")
console.log(number)
document.getElementById("number").innerHTML = number

var rand = Math.floor(Math.random() * 100);
console.log(rand)
//Math.floor ฟังก์ชันใช้ปัดเศษทศนิยมลงเป็นจำนวนเต็ม
//Math.random ฟังก์ชันสุ่มตัวเลข 0 - 1 (0, 0.1, 0.2, 0.3, ... , 1)

document.getElementById("result").innerHTML = rand






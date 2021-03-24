let quantity = prompt("กรุณากรอกจำนวนอาหาร")
console.log(quantity)
document.getElementById("qnt").innerHTML = quantity

var sum = 0;

for (var i = 1; i <= quantity; i++) {
    console.log(i)
    var price = prompt("อาหารรายการที่ " + i + ":")
    console.log(price)
    document.getElementById("price").innerHTML += "อาหารรายการที่ " + i + ": " + price + " บาท" + "<br>"
    sum = sum + parseInt(price)
    console.log(sum)
}

document.getElementById("sum").innerHTML = "ราคารวมทั้งหมด " + sum + " บาท"




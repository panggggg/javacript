let round = prompt("กรุณากรอกจำนวนรอบ :")
console.log(round)
document.getElementById("round").innerHTML = round

for (var i = 1; i <= round; i++) {
    var ans = prompt("หัว หรือ ก้อย?")
    console.log("user: " + ans)
    var rand = Math.floor(Math.random() * 10)
    console.log(rand)
    if (rand <= 4) {
        var rand_ans = "หัว"
        console.log(rand_ans)
        if (ans == rand_ans) {
            var result = "ยินดีด้วย :)"
            console.log(result)
        } else {
            var result = "เสียใจด้วย ;("
            console.log(result)
        }
    } else {
        var rand_ans = "ก้อย"
        console.log(rand_ans)
        if (ans == rand_ans) {
            var result = "ยินดีด้วย :)"
            console.log(result)
        } else {
            var result = "เสียใจด้วย ;("
            console.log(result)
        }
    }
    document.getElementById("ans").innerHTML += "รอบที่ " + i + ": " + ans + "      " + result + "<br>"
}

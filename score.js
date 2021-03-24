let score = prompt("กรุณากรอกคะแนนของคุณ")

if (score >= 80) {
    document.getElementById("grade").innerHTML = "เกรด A"
}
else if (score >= 75) {
    document.getElementById("grade").innerHTML = "เกรด B+"
}
else if (score >= 70) {
    document.getElementById("grade").innerHTML = "เกรด B"
}
else if (score >= 60) {
    document.getElementById("grade").innerHTML = "เกรด C+"
}
else if (score >= 55) {
    document.getElementById("grade").innerHTML = "เกรด C"
}
else if (score >= 50) {
    document.getElementById("grade").innerHTML = "เกรด D+"
}
else if (score >= 45) {
    document.getElementById("grade").innerHTML = "เกรด D"
}
else {
    document.getElementById("grade").innerHTML = "เกรด F"
}
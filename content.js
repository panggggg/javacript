var age = prompt("กรุณากรอกอายุของคุณ : ")
console.log(age)

if (age > 13) {
    document.getElementById("content").innerHTML = "<iframe width=\"560\" height =\"315\" src =\"https://www.youtube.com/embed/zqheLGjl5eA\" title = \"YouTube video player\" frameborder = \"0\" allow = \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen ></iframe >"
}
else {
    document.getElementById("content").innerHTML = "ไม่ได้รับอนุญาต"
    console.log("Not Pass")
}

let ctitle=document.getElementById("firsttitle")
ctitle.style.color="red"

let ctitles=document.querySelectorAll(".card-title")
console.log(ctitles)
ctitles[0].style.color="blue"
ctitles[1].style.color="red"
ctitles[2].style.color="green"

document.querySelector(".this").style.color="black"
document.querySelector(".this").style.background="yellow"

console.log(document.getElementsByTagName("a"))
console.log(document.body.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))

console.log(document.getElementsByName("search"))
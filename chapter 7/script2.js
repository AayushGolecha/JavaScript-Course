let id1=document.getElementById("id1")
let sp1=document.getElementById("sp1")
let body=document.body
let c=document.getElementsByClassName("box")[1]

console.log(id1)
console.log(id1.matches(".class"))
console.log(id1.matches(".box"))
console.log(id1.matches("#id1"))

console.log(sp1.closest(".box"))
console.log(sp1.closest("#id1"))
console.log(sp1.closest("#sp1"))
console.log(sp1.closest("body"))
console.log(sp1.closest("html"))

console.log(id1.contains(sp1))
console.log(sp1.contains(sp1))
console.log(sp1.contains(id1))
console.log(body.contains(sp1))
console.log(body.contains(id1))
console.log(body.contains(c))
console.log(c.contains(c))
console.log(c.contains(body))
console.log(sp1.contains(c))

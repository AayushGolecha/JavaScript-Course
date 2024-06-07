let x = document.getElementsByTagName("span")[0]
console.log(x)
let y = document.getElementsByTagName("span")[0]
console.dir(y)

console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)

let a = document.getElementById("first")
console.log(a.innerHTML)
a.innerHTML = "<i>I am Italic</i>"
console.log(a.innerHTML)
console.log(a.outerHTML)
a.outerHTML = "<div id=\"first\">Hey I am div</div>"
console.log(document.getElementById("first").outerHTML)

console.log(document.body.firstChild.data)
console.log(document.body.firstChild.nodeName)
console.log(document.body.firstChild.nodeValue)

console.log(document.body.textContent)

document.getElementById("first").hidden = true
document.getElementById("first").hidden = false


let b = document.getElementById("second")
console.log(b.hasAttribute("class"))
console.log(b.hasAttribute("style"))

console.log(b.getAttribute("class"))

// b.setAttribute("hidden","true")
b.setAttribute("class", "true aayush")
console.log(b.getAttribute("class"))

b.removeAttribute("class")
console.log(b.getAttribute("class"))

console.log(b.attributes)

console.log(b.dataset)
console.log(b.dataset.game)
console.log(b.dataset.player)

let add = document.getElementById("container")
let div1 = document.createElement("div")
div1.className = "alert"
div1.innerHTML = "<h1>Hello 2</h1>"

add.append(div1)

let div2 = document.createElement("div")
div2.className = "alert"
div2.innerHTML = "<h1>Hello 1</h1>"

add.prepend(div2)

let div3 = document.createElement("div")
div3.className = "alert"
div3.innerHTML = "<h1>Hello 3</h1>"

add.before(div3)

let div4 = document.createElement("div")
div4.className = "alert"
div4.innerHTML = "<h1>Hello 4</h1>"

add.after(div4)

// add.replaceWith(div4)

let id4 = document.getElementById("fourth")
id4.insertAdjacentHTML("beforebegin", "<div>Before Begin</div")
id4.insertAdjacentHTML("afterbegin", "<div>After Begin</div")
id4.insertAdjacentHTML("beforeend", "<div>Before End</div")
id4.insertAdjacentHTML("afterend", "<div>After End</div")

let id5 = document.getElementById("fifth")
id5.remove()

let id6 = document.getElementById("sixth")
document.getElementById("sixth").className = "alert blue"
console.log(id6.classList)
id6.classList.add("red")
console.log(id6.classList)
id6.classList.remove("blue")
console.log(id6.classList)
id6.classList.toggle("yellow")
console.log(id6.classList)
console.log(id6.classList.contains("alert"))
console.log(id6.classList.contains("blue"))
console.log(id6.classList.contains("red"))

let timerId=setTimeout(function(){
    alert("Hello from Aayush")
},3000)
console.log(timerId)

const sum=(a,b)=>{
    console.log("Sum of a and b is "+(a+b))
}
let p=setTimeout(sum, 5000, 5, 6)
clearTimeout(timerId)
clearTimeout(p)

let timerId1=setInterval(function(){
    alert("This is setInterval")
},3000)
clearInterval(timerId1)

const display=(a,b)=>{
    // a=prompt("Enter text here")
    // b=prompt("Enter text here")
    console.log(`${a} and ${b}`)
}
let q=setInterval(display, 5000, "Aayush", "Karan")
clearInterval(q)

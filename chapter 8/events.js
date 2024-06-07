let a = document.getElementsByClassName("container")[0]
a.onclick = () => {
    let b = document.getElementsByClassName("container")[0]
    b.innerHTML = "Hello World"
    alert("You were clicked")
}

let id = document.getElementById("btn")
// id.addEventListener('click', function(){
//     console.log("I was clicked")
// })

let x = function (e) {
    console.log(e)
    console.log(e.target, e.type, e.currentTarget, e.clientX, e.clientY)
    console.log("I was clicked")
    alert("Hello 1")
}
id.addEventListener('click', x)

let y = function () {
    console.log("you were clicked")
    alert("Hello 2")
}
id.addEventListener('click', y)

let user=prompt("Enter a number")
if(user =="1"){
    id.removeEventListener('click', x)
}
else{
    id.removeEventListener('click', y)
}


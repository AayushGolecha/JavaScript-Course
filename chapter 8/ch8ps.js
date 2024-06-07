// Q1
document.querySelector(".a3").addEventListener("click", ()=>{
    alert('This is Alert 3')
})
document.querySelector(".a4").addEventListener("click", ()=>{
    alert('This is Alert 4')
})

// Q3
document.getElementById("insta").addEventListener("click", ()=>{
    window.open("https://instagram.com","_blank")
})
document.getElementById("you").addEventListener("click", ()=>{
    window.open("https://youtube.com","_blank")
})

// Q4
let timerId=setInterval(function(){
    console.log(document.body)
},5000)
clearTimeout(timerId)

// Q5
let glow=()=>{
    document.querySelector(".box").classList.toggle("glow")
}

const prompt = require('prompt-sync')()

// Q1
console.log("har\"".length)

// Q2
let text = "Hello world, welcome to the universe.";
console.log(text.includes("world"))
console.log(text.includes("world",12))
console.log(text.startsWith("Hello"))
console.log(text.startsWith("world"))
console.log(text.startsWith("world",5))
console.log(text.startsWith("world",6))
console.log(text.endsWith("."))
console.log(text.endsWith("world",11))

// Q3
let n="KARAN"
console.log(n.toLowerCase())

// Q4
let t="Please give rs 1000"
let amount=t.slice(15)
amount=Number.parseInt(amount)
console.log(amount)
console.log(typeof amount)


// Q5
let a=prompt("Enter a string")
console.log(a.replace(a[4],'f'))
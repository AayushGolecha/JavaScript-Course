let a="aj"
console.log(a)

let b='karan'
console.log(b)

// Template Literals
let boy1="Aayush"
let boy2='Karan'
//Karan is friend of Aayush
console.log(`${boy2} is friend of ${boy1}`)

// Escape sequence characters
let fruit1='Banana\'s'
console.log(fruit1)

let fruit2="Banana\"s"
console.log(fruit2)

let fruit3='Banana\ns'
console.log(fruit3)

// String Methods

let n="Aayush"

console.log(n.length)
console.log(n.toUpperCase())
console.log(n.toLowerCase())
console.log(n.slice(2))
console.log(n.slice(2,5))
console.log(n.replace("ay","y"))

let a1="Ka"
let a2="ran"
console.log(a1.concat(a2))

let x="mohan"
let y="rohan"
console.log(x.concat(" is friend of ",y))

let z="    Meena    "
console.log(z)
console.log(z.trim())

let c="iamfine"
for(let i=0;i<c.length;i++){
    console.log(c[i])
}

for(let a of "Karan"){
    console.log(a)
}



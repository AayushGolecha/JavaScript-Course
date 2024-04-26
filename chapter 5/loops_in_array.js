let num=[3,5,8,2,6]

for(let i=0;i<num.length;i++){
    console.log(num[i])
}

num.forEach((e)=>{
    console.log(e*e)
})

let a = "Aayush"
let arr=Array.from(a)
console.log(arr)

for (let i of num) {
    console.log(i)
}
for (let i of "karan") {
    console.log(i)
}

for (let i in num) {
    console.log(num[i])
}

// MAP method
let arr1=[4, 65, 7, 8.4, 10, 15]
let a1=arr1.map((e)=>{
    console.log(e)
    return e+5
})
console.log(a1, arr1)

// Filter Method
let a2=arr1.filter((e)=>{
    return e>8
})
console.log(a2)

let arr2=[25, 4, 10, 12, 7, 2]
let func=(e)=>{
    return e>8
}
let a3=arr2.filter(func)
console.log(a3)

// Reduce Method
let arr3=[2, 4, 6, 8, 10]
let add=(x,y)=>{
    return x+y
}
let a4=arr3.reduce(add)
console.log(a4)
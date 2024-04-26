// Q1
let arr1=[2, 5, 8, 11, 14]
let input=prompt("Enter the number to add")
arr1.push(input)
console.log(arr1)

// Q2
let arr2=[1, 3, 5, 7, 9]
let num
while(num!=0){
    num=prompt("Enter the number")
    if(num>0){arr2.push(num)}
}
console.log(arr2)

// Q3
let arr3=[20, 15, 40, 70, 9, 300, 9]
let newArr=arr3.filter((e)=>{
    return e%10==0
})
console.log(newArr, arr3)

// Q4
let arr4=[2,3,5,7,9]
let square=(e)=>{
    return e*e
}
let newArr1=arr4.map(square)
console.log(newArr1)

// Q5
let n=prompt("Enter the number for factorial")
let x=[]
for(let i=0;i<n;i++){
    x.push(i+1)
}
console.log(x)
let fact=x.reduce((a,b)=>{
    return a*b
})
console.log(`Factorial of number ${n} is ${fact}`)
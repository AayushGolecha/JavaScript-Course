const prompt = require('prompt-sync')();

// factorial of a number using for loop
// let n=prompt("Enter a number")
// n=Number.parseInt(n)
// let fact=1
// for(let i=1;i<=n;i++){
//     fact *= i
// }
// console.log(fact)


// for - In Loop
const item={
    Aayush : 1,
    Akshat : 2,
    Aastha : 3,
    Abhishek : 4
}
for(let a in item){
    console.log("Name: "+a+" and Rollno is "+item[a])
}


// for - Of Loop
for(let a of "Aayush"){
    console.log(a)
}


// factorial using while loop
let n=prompt("Enter a number")
n=Number.parseInt(n)
let i=1
let fact = 1
while(i<=n){
    fact *= i
    i++;
}
console.log(fact)


// do - while loop
let n1=prompt("Enter a number")
n=Number.parseInt(n1)
let i1=10
do{
    console.log(i1)
    i1++
}while(i1<n)

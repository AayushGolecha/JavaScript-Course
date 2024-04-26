
const prompt = require('prompt-sync')();

// Q1
let marks={
    aayush : 90,
    avi : 70,
    payal : 40
} 
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("Marks of "+Object.keys(marks)[i]+" is "+marks[Object.keys(marks)[i]])
}

// Q2
for( let a in marks){
    console.log("Marks of "+a+" is "+marks[a])
}

// Q3
let cn = 22
let i
i=Number.parseInt(i)
while(i!=cn){
    i=prompt("Enter a number")
    if(i!=cn){
        console.log("Wrong Number Try Again")  
    }
}
console.log("You have entered the correct number!!")


// Q4
const mean=(a,b,c,d,e) =>{
    let sum=a+b+c+d+e
    return sum/5
}

console.log("Mean of given 5 numbers is "+mean(1,2,3,4,5))
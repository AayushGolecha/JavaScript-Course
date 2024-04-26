const prompt = require('prompt-sync')();

//q1
// let a=prompt("what is your age?")
// if(a>10 && a<20){
//     console.log("Yes")
// }
// else{
//     console.log("No")
// }

//q2
// let b=prompt("Choose a number b/w 0 to 2")
// b=Number.parseInt(b)
// switch(b){
//     case 0:
//         console.log("0")
//         break
//     case 1:
//         console.log("1")
//         break
//     case 2:
//         console.log("2")
//         break
//     default:
//         console.log("Invalid")
//         break        
// }

//q3
let c=prompt("give a number")
c=Number.parseInt(c)
if(c%2==0 && c%3==0){
    console.log("Divisible")
}
else{
    console.log("Non-Divisible")
}

//q4
let d=prompt("give a number")
d=Number.parseInt(d)
if(d%2==0 || d%3==0){
    console.log("Divisible")
}
else{
    console.log("Non-Divisible")
}

//q5
let e=prompt("What is your age")
e=Number.parseInt(e)
console.log("You can ",(e<18? "not drive":"drive"))



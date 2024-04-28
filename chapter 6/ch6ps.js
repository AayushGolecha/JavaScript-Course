// Q1
let age = prompt("Enter the age")
age = Number.parseInt(age)
if (age >= 18) {
    alert("You can drive")
}
else {
    alert("You cannot drive")
}

// Q2
// let runagain = true
// while (runagain) {
//     age = prompt("Enter the age")
//     age = Number.parseInt(age)
//     if (age >= 18) {
//         alert("You can drive")
//     }
//     else {
//         alert("You cannot drive")
//     }
//     runagain = confirm("Do you want to play again?")
// }

// Q3
// let runagain1 = true
// while (runagain1) {
//     age = prompt("Enter the age")
//     age = Number.parseInt(age)
//     if (age >= 18) {
//         alert("You can drive")
//     }
//     else if (age < 0) {
//         console.error("Age entered is negative!! Enter Again")
//     }
//     else {
//         alert("You cannot drive")
//     }
//     runagain1 = confirm("Do you want to play again?")
// }

// Q4 
let userinput=prompt("Enter a number")
userinput=Number.parseInt(userinput)
if(userinput>4){
    location.href="https://google.com"
}
else{
    alert("entered number is"+ userinput)
}

// Q5
let c=prompt("Enter the color")
document.body.style.background= c

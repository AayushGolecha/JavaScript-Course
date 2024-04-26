
const prompt = require('prompt-sync')();


let a = prompt("Hey whats you age?")
a = Number.parseInt(a); // Converting the string to a number
if (a < 0) {
    r = "This is an invalid"
}
else if (a < 9) {
    r = "You are a kid and you cannot even think of driving"
}
else if (a < 18 && a >= 9) {
    r = "You are a kid and you can think of driving after 18"
}
else {
    r = "You can now drive as you are above 18"
}
console.log(r)
console.log("Done")
// HomeWork - Explore switch statement and write a basic program in the comments
console.log("You can", (a < 18 ? "not drive" : "drive"))

// switch
let x = prompt("tell a number")
x = Number.parseInt(x)
switch (x) {
    case 0:
        day = "sunday"
        break
    case 1:
        day = "monday"
        break
    case 2:
        day = "tuesday"
        break
    case 3:
        day = "wednesday"
        break
    case 4:
        day = "thrusday"
        break
    case 5:
        day = "friday"
        break
    case 6:
        day = "saturday"
        break
}
console.log(day)


let z = prompt("Which day it is choose a number")
z = Number.parseInt(z)
switch (z) {
    case 1:
        day = "Sunday"
        break
    case 2:
        day = "Monday"
        break
    case 3:
        day = "Tuesday"
        break
    case 4:
        day = "Wednesday"
        break
    case 5:
        day = "Thrusday"
        break
    case 6:
        day = "Friday"
        break
    case 7:
        day = "Saturday"
        break
    default:
        day ="Invalid Input!!"
}
console.log(day)

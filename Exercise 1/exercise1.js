let ran = Math.floor(Math.random() * 100)
console.log(ran)
let guess
let i = -1
while (ran != guess) {
    guess = prompt("Enter a number b/w 1-100")
    if (guess > 0 && guess < 101) {
        if (ran == guess) {
            alert("Your Guess Is Correct!")
        }
        else if (ran > guess) {
            alert("Correct Number Is Greater Than Entered Number")
        }
        else {
            alert("Correct Number Is Lesser Than Entered Number")
        }
    }
    else {
        alert("Entered Number Not In Range Of 1-100")
    }
    i++
}
let Score = 100 - i
alert(`Correct Number Was ${ran} \nNumber Of Guesses Was ${i} \nYour Score is ${Score}`)

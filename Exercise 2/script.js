console.log("Game Will Start Now")
let com
let obj = {
    0: "S",
    1: "W",
    2: "G"
}
let i = 0
let player
let cScore = 0
let pScore = 0
while (i < 5) {
    com = Math.floor(Math.random() * 3)
    console.log(obj[com])
    player = prompt("Choose b/w Snake, Water & Gun")
    console.log(player)
    if (obj[com] == player) {
        cScore = cScore + 0
        pScore = pScore + 0
    }
    else if (obj[com] == "S" && player == "W") {
        cScore = cScore + 1
    }
    else if (obj[com] == "W" && player == "G") {
        cScore = cScore + 1
    }
    else if (obj[com] == "G" && player == "S") {
        cScore = cScore + 1
    }
    else if (obj[com] == "W" && player == "S") {
        pScore = pScore + 1
    }
    else if (obj[com] == "G" && player == "W") {
        pScore = pScore + 1
    }
    else {
        pScore = pScore + 1
    }
    i++
}
if(cScore==pScore){
    console.log(`Player Score is ${pScore}`)
    console.log(`Computer Score is ${cScore}`)
    console.log("Match Draw")
}
else if(cScore>pScore){
    console.log(`Player Score is ${pScore}`)
    console.log(`Computer Score is ${cScore}`)
    console.log("Computer Won")
}
else{
    console.log(`Player Score is ${pScore}`)
    console.log(`Computer Score is ${cScore}`)
    console.log("Player Won")
}

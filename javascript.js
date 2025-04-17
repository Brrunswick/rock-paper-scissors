let playerScore = 0
let computerScore = 0

function computerChoice() {
  
    let randNum = Math.floor(Math.random() * 3)
  
    if (randNum === 0) {
        return "rock"
    } else if (randNum === 1) {
        return "paper"
    } else if (randNum ===2) {
        return "scissors"
    }
}

computerChoice();

let playerChoice = (prompt("Rock, Paper or Scissors?"));

if (playerChoice.toLowerCase() === "rock" || playerChoice.toLowerCase() === "paper" || playerChoice.toLowerCase() === "scissors") {
    console.log("thanks")
} else {
    console.log ("please choose rock paper or scissors")
}
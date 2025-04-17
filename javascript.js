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
let playerChoice = (prompt("Rock, Paper or Scissors?"));

if (playerChoice.toLowerCase() != "rock" && playerChoice.toLowerCase() != "paper" && playerChoice.toLowerCase() != "scissors") {
    console.log("please choose rock paper or scissors")
} 

function playRound(playerChoice, computerChoice) {
    console.log(`the computer chose ${computerChoice}`)
    console.log(`You picked ${playerChoice.toLowerCase()}`)
    if (playerChoice.toLowerCase() === computerChoice) {
        console.log("draw")
    } else if ((playerChoice.toLowerCase() === "rock" && computerChoice === "paper") || (playerChoice.toLowerCase() === "paper" && computerChoice === "scissors") || (playerChoice.toLowerCase() === "scissors" && computerChoice === "rock")) {
        console.log("the computer wins")
        computerScore += 1
    } else {
        console.log("You win")
        playerScore += 1
    }
    
    console.log(`the score is ${playerScore} - ${computerScore}`)
}

playRound(playerChoice, computerChoice());

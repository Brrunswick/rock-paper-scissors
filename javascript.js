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


function getPlayerChoice() {
    let playerChoice = (prompt("Rock, Paper or Scissors?"));
        if (playerChoice.toLowerCase() === "rock" || playerChoice.toLowerCase() === "paper" || playerChoice.toLowerCase() === "scissors") {
            return playerChoice.toLowerCase()
        }
}
function playGame(){
    function playRound(getPlayerChoice, computerChoice) {
        console.log(`the computer chose ${computerChoice}`)
        if (getPlayerChoice === computerChoice) {
            console.log(`You picked ${getPlayerChoice}`)
            console.log("It's a tie")
        } else if ((getPlayerChoice === "rock" && computerChoice === "paper") || (getPlayerChoice=== "paper" && computerChoice === "scissors") || (getPlayerChoice === "scissors" && computerChoice === "rock")) {
            console.log(`You picked ${getPlayerChoice}`)
            console.log("the computer wins")
            computerScore += 1
        } else if ((getPlayerChoice === "paper" && computerChoice === "rock") || (getPlayerChoice=== "scissors" && computerChoice === "paper") || (getPlayerChoice === "rock" && computerChoice === "scissors")){
            console.log(`You picked ${getPlayerChoice}`)
            console.log("You win")
            playerScore += 1
        } else {
            console.error(`You did not make a choice. Please choose rock, paper or scissors`)
        }
        console.log(`the score is ${playerScore} - ${computerScore}`)
    }    

    function finalScore(playerScore, computerScore) {
        if (playerScore === computerScore) {
            console.log(`The final score is ${playerScore}  - ${computerScore}. It's a draw!`)
        } else if (playerScore > computerScore) {
            console.log(`The final score is ${playerScore}  - ${computerScore}. You win!`)
        } else if (playerScore < computerScore) {
            console.log(`The final score is ${playerScore}  - ${computerScore}. Better luck next time..`)
        }
    }

    playRound(getPlayerChoice(), computerChoice());
    setTimeout(() => { playRound(getPlayerChoice(), computerChoice());}, 4000);
    setTimeout(() => { playRound(getPlayerChoice(), computerChoice());}, 8000);
    setTimeout(() => { playRound(getPlayerChoice(), computerChoice());}, 12000);
    setTimeout(() => { playRound(getPlayerChoice(), computerChoice());}, 16000);
    setTimeout(() => { finalScore(playerScore, computerScore);}, 20000);
}

playGame();

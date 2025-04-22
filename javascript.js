//define variables to keep track of player score & computer score
let playerScore = 0
let computerScore = 0

// define "results" so that when we play a round the results div can be updated
const results = document.querySelector("#results");
const computerDisplay = document.querySelector("#computerChoice");
const restart = document.querySelector("#restart");


// define a function which will give the output either rock paper or scissors
function computer() {
    let randNum = Math.floor(Math.random() * 3)
    if (randNum === 0) {
        return "rock"
    } else if (randNum === 1) {
        return "paper"
    } else if (randNum ===2) {
        return "scissors"
    }
}

function playRound(playerChoice) {
    
    //create a variable "computer choice" and set it to be the result of calling the previous function
    let computerChoice = computer(); 
    
    //updates the scores
    if (playerChoice === computerChoice) {
    } else if ((playerChoice === "rock" && computerChoice === "paper") || (playerChoice=== "paper" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "rock")) {
        computerScore += 1
    } else if ((playerChoice === "paper" && computerChoice === "rock") || (playerChoice=== "scissors" && computerChoice === "paper") || (playerChoice === "rock" && computerChoice === "scissors")){
        playerScore += 1
    }

    // edits the text content of the results div to display an up to date game score
    results.textContent = `The score is ${playerScore} - ${computerScore}`;
    computerDisplay.textContent = `The computer chose: ${computerChoice}`;
    finalScore();
}

//define a function that will determine if someone has won by reaching 5 points, displaying a victory/defeat message and disabling the game buttons
function finalScore() {
    if (playerScore === 5 || computerScore === 5) {
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        restart.setAttribute("style", "display: block")
        if (computerScore > playerScore) {
            results.textContent = `The final score is ${playerScore}  - ${computerScore}. Better luck next time..`;
        } else if (computerScore < playerScore) {
            results.textContent = `The final score is ${playerScore}  - ${computerScore}. You win!`;
        }
    }  
}

function restartGame() {
    playerScore = 0
    computerScore = 0
    results.textContent = `The score is ${playerScore} - ${computerScore}`;
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    restart.setAttribute("style", "display: none")
}




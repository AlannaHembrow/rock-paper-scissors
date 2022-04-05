let computerSelection;
let playerSelection;

function playerChoice() {
    playerSelection = prompt(`Enter your choice of rock, paper or scissors!`);
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        return "rock";
    } else if (computerChoice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == "paper") || 
       (playerSelection == "paper" && computerSelection == "scissors" ) ||
       (playerSelection == "scissors" && computerSelection == "rock")) {
        return "loss";
    } else if (playerSelection === computerSelection) {
        return "tie";
    } else {
        return "win";
    }
}

function game() {
    let lastResult;
    let playerScore = 0;
    let computerScore = 0;
    let roundResult = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = playerChoice();
        computerSelection = computerPlay();
        lastResult = playRound(playerSelection, computerSelection);
        if (lastResult == "win") {
            console.log("You win!") 
            playerScore += 1
        } else if (lastResult == "loss") {
            console.log("You lost!")
            computerScore += 1;
        } else {
            console.log("It was a tie!") 
        }
    }
    console.log(`The results are in: Your Score: ${playerScore} | The Computer: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log(`You win the game!`);
    } else if (playerScore == computerScore) {
        console.log(`The game is a draw!`);
    } else {
        console.log(`You lose the game!`);
    }
}

game();

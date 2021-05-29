let computerSelection;
let playerSelection;

function playerChoice() {
    playerSelection = "rock";
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
        playerScore += roundResult;
        if (lastResult == "win") {
            console.log("You win!") 
            roundResult = 1;
        } else if (lastResult == "loss") {
            console.log("You lost!")
            computerScore += 1;
            roundResult = 0;
        } else {
            console.log("It was a tie!") 
            roundResult = 0;
        }
    }
    console.log(`The results are in: ${playerScore} Your Score ${computerScore} The Computer`);
}

game();

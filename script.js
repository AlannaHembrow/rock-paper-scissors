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
        return result = "loser";
    } else if (playerSelection === computerSelection) {
        return result = "draw";
    } else {
        return result = "winner";
    }
}


function game() {
    if (result === "loser") {
        console.log("you suck");
    } else {
        console.log("you best");
    }
}

let result;
const playerSelection = "paper";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
game();

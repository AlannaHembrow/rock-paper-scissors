let btns = document.querySelectorAll(".game__buttons-player");
let score = 0;
let computerScore = 0;
const computerScoreboard = document.getElementById("computer-scoreboard");
const playerScoreboard = document.getElementById("player-scoreboard");
const gameLog = document.getElementById("game-log");
const computerDisplayChoices = document.getElementById("computer-choice");
const playerDisplayChoices = document.getElementById("player-choice");


for (i of btns) {
    i.addEventListener('click', function() {
        let playerSelection = this.innerHTML
        game(playerSelection);
    });
}

function playRound(playerSelection) {
    let computerChoice = computerRandom();
        if ((playerSelection == "Rock" && computerChoice == "Paper") || 
        (playerSelection == "Paper" && computerChoice == "Scissors" ) ||
        (playerSelection == "Scissors" && computerChoice == "Rock")) {
            let roundResult = "loss";
            return roundResult;
        } else if (playerSelection === computerChoice) {
            let roundResult = "tie";
            return roundResult;
        } else {
            let roundResult = "win";
            return roundResult;
        }
}


function computerRandom() {
    computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        computerChoice = "Rock"
        computerDisplayChoices.innerHTML = "<img src='images/Rock.svg' width='90%' height='90%'>Computer Chooses: Rock!"

        return computerChoice;
    } else if (computerChoice == 1) {
        computerChoice = "Paper"
        computerDisplayChoices.innerHTML = "<img src='images/Paper.svg' width='90%' height='90%'>Computer Chooses: Paper!"
        return computerChoice;
    } else {
        computerChoice = "Scissors"
        computerDisplayChoices.innerHTML = "<img src='images/Scissors.svg' width='90%' height='90%'>Computer Chooses: Scissors!"
        return computerChoice;
    }
}

function resetGame() {
    score = 0;
    computerScore = 0;
    computerScoreboard.innerHTML = `Computer Score: ${computerScore}`
    playerScoreboard.innerHTML = `Your Score: ${score}`
    computerDisplayChoices.innerHTML = ""
    playerDisplayChoices.innerHTML = ""
    gameLog.innerHTML = "";
    console.log(`You have reset the game`)
}

function game(playerSelection) {
    roundResult = playRound(playerSelection);
    playerDisplayChoices.innerHTML = "<img src='images/" + playerSelection +  ".svg' width='90%' height='90%'>'Player Chooses: " + playerSelection +  "!";
    for (let i = 0; i < 5; i++) {
        if (roundResult == "win") {
            score += 1;
            playerScoreboard.innerHTML = `Your Score: ${score}`;
            gameLog.insertAdjacentHTML('afterBegin', 'You win this round! \n');
            break;
        } else if (roundResult == "loss") {
            computerScore += 1;
            console.log(`You lost this round! The score is currently ${score} to ${computerScore}`);
            computerScoreboard.innerHTML = `Computer Score: ${computerScore}`;
            gameLog.insertAdjacentHTML('afterBegin', 'You lost this round! \n');
            break;
        } else {
            console.log(`It was a tie this round! The score is currently ${score} to ${computerScore}`);
            gameLog.insertAdjacentHTML('afterBegin', 'It was a tie this round! \n');
            break;
        }
    }

    if (score == 5 || computerScore == 5) {
        if (score > computerScore) {
            gameLog.insertAdjacentHTML('afterBegin', 'You win the game! Click reset to start the game again.\n');
        } else {
            gameLog.insertAdjacentHTML('afterBegin', 'You lost the game! Click reset to start the game again.\n');
        }
    }
}

document.getElementById("reset").onclick = function() {resetGame()};

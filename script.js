let btns = document.querySelectorAll(".game__buttons-player");
let score = 0;
let computerScore = 0;

for (i of btns) {
    i.addEventListener('click', function() {
        let playerSelection = this.innerHTML
        document.querySelector('.msg').innerHTML = playerSelection;
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
        return "Rock";
    } else if (computerChoice == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function resetGame() {
    score = 0;
    computerScore = 0;
    console.log(`You have reset the game`)
}

function game(playerSelection) {
    roundResult = playRound(playerSelection);
    for (let i = 0; i < 5; i++) {
        if (roundResult == "win") {
            score += 1;
            console.log(`You win the round! The score is currently ${score} to ${computerScore}`);
            break;
        } else if (roundResult == "loss") {
            computerScore += 1;
            console.log(`You lost this round! The score is currently ${score} to ${computerScore}`);
            break;
        } else {
            console.log(`It was a tie this round! The score is currently ${score} to ${computerScore}`);
            break;
        }
    }

    if (score == 5 || computerScore == 5) {
        console.log(`The results are in: Your Score: ${score} | The Computer: ${computerScore}`);
        if (score > computerScore) {
            console.log(`You win the game!`);
            resetGame(score, computerScore);
        } else if (score == computerScore) {
            console.log(`The game is a draw!`);
            resetGame(score, computerScore);
        } else {
            console.log(`You lose the game!`);
            resetGame(score, computerScore);
        }
    }
}

game();
document.getElementById("reset").onclick = function() {resetGame()};

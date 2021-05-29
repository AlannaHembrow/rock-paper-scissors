function computerPlay() {
    let winningChoice = Math.floor(Math.random() * 3);
    if (winningChoice == 0) {
        return "rock";
    } else if (winningChoice == 1){
        return "paper";
    } else {
        return "scissors";
    }
}

computerPlay();
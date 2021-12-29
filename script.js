const choices = ["rock", "paper", "scissors"];
let playerSelect;
let computerSelect;

function computerPlay() {
    computerSelect = choices[Math.floor(Math.random()*choices.length)];
}

function playerPlay() {
    playerSelect = prompt("rock, paper or scissor");
}

function playRound() {
    playerPlay();
    computerPlay();

    if (playerSelect === "rock" && computerSelect === "scissors") {
        console.log("Rock smashes scissors, You win");
    }else if (playerSelect === "paper" && computerSelect === "scissors") {
        console.log("scissors cuts paper you lose");   
    }else if (playerSelect === "scissors" && computerSelect === "paper") {
        console.log("scissors cuts paper you win");  
    }else if (playerSelect === "scissors" && computerSelect === "rock") {
        console.log("Rock smashes scissors, You lose");
    }else if (playerSelect === computerSelect) {
        console.log("It's a tie");
    }
}

function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}

console.log(game());
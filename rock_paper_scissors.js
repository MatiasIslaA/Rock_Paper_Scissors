let userScore = 0;
let computerScore = 0;
// function that get's a random number between
// 'min' and 'max'

function selections(player, robot) {
    if (player == robot) {
        return "It's a tie!";
    }
    else if (player == "rock" && robot == "scissors") {
        userScore += 1;
        return "You win!";
    }
    else if (player == "rock" && robot == "paper") {
        computerScore += 1;
        return "You lose!";
    }
    else if (player == "scissors" && robot == "rock") {
        computerScore += 1;
        return "You lose!";
    }
    else if (player == "scissors" && robot == "paper") {
        userScore += 1;
        return "You win!";
    }
    else if (player == "paper" && robot == "rock") {
        userScore += 1;
        return "You win!";
    }
    else if (player == "paper" && robot == "scissors") {
        computerScore += 1;
        return "You lose!";
    }
}

function randomNumber(min, max) {
    min  = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.random() * (max - min) + min);
}


// function that converts the random number into a string
function gameon(number) {
     let result;
     if (number == 3) {
        result = "paper";
    }
    else if (number == 2) {
        result = "scissors";
    }
    else if (number ==1) {
        result = "rock";

    }
    return result;
}
// Function that shows game results 

let winner = function cor(a, b) {
    if (a > b) {
        return "You're the winner!";
    } else if (a == b) {
        return "It's a tie!";
    } else {
        return "The computer has won!";
    }
}

// Loop of the game
let computerNumber = (Math.round(randomNumber(1, 3)))
for (i=0; i <5; i++) {
    let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
    console.log(selections(playerSelection, gameon(computerNumber)));
    console.log(userScore + " " + computerScore);
    computerNumber = randomNumber(1, 3);
}

console.log(winner(userScore, computerScore));
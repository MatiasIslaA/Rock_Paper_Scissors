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

let randomNumber = function getRandomNumber(min, max) {
    min  = Math.ceil(min);
    max = Math.floor(max);
    return Math.random() * (max - min) + min;
}
let threeRandomNumbers = Math.round(randomNumber(1, 3));
let threeRandomNumbers2 = Math.round(randomNumber(1, 3));
let threeRandomNumbers3 = Math.round(randomNumber(1, 3));
let threeRandomNumbers4 = Math.round(randomNumber(1, 3));
let threeRandomNumbers5 = Math.round(randomNumber(1, 3));

// function that converts the random number into a string
let gameon = function computerOptions(number) {
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
// comparation 

let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
let gameone = selections(playerSelection, gameon(threeRandomNumbers));
console.log(gameone)
let playerSelection2 = prompt("Rock, paper or scissors?").toLowerCase();
gametwo = selections(playerSelection2, gameon(threeRandomNumbers2));
console.log(gametwo);
let playerSelection3 = prompt("Rock, paper or scissors?").toLowerCase();
gamethree = selections(playerSelection3, gameon(threeRandomNumbers3))
console.log(gamethree);
let playerSelection4 = prompt("Rock, paper or scissors?").toLowerCase();
gamefour = selections(playerSelection4, gameon(threeRandomNumbers4));
console.log(gamefour);
let playerSelection5 = prompt("Rock, paper or scissors?").toLowerCase();
gamefour = selections(playerSelection5, gameon(threeRandomNumbers5));
console.log(gamefour);
console.log(userScore + " " + computerScore)
let winner = function cor(a, b) {
    if (a > b) {
        return "You're the winner!";
    } else if (a == b) {
        return "It's a tie!";
    } else {
        return "The computer has won!";
    }
}

console.log(winner(userScore, computerScore));
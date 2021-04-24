const attack = document.querySelector(".attack")

document.addEventListener("DOMContentLoaded", () => {
const protagonist = document.querySelector(".protagonist");
let bottom = 70;
let left = 0;
let isJumping = false;

function jump() {
    if(isJumping) return;
    let timerId = setInterval( function() {
        if (bottom > 100) {
            clearInterval(timerId)
            let timerDownId = setInterval( function() {
                if (bottom <= 70) {
                    clearInterval(timerDownId);
                    isJumping = false;
                }
                bottom -=5
                protagonist.style.bottom = bottom + "px"
            }, 20)
        }
        isJumping = true;
        bottom += 60;
        protagonist.style.bottom = bottom +"px"}, 20)
}

function slideLeft() {
    left -= 25;
    protagonist.style.left = left +"px";

}



function slideRight() {
    if(left < 800){
        left += 25;
        protagonist.style.left = left +"px";
    } else if(left > 200){
        attack.style.visibility = "visible";
    }
}

function control(e) {
    if (e.keyCode === 38) {
        jump();
    } else if(e.keyCode === 39) {
        slideRight();
    } else if(e.keyCode === 37) {
        slideLeft();
}}
document.addEventListener("keydown", control)

}
)

///////////////////////////////

const enemy = document.querySelector(".enemy")
const popup = document.querySelector(".popup")
let weapons = document.querySelector(".weapons")
enemy.addEventListener('click', () => {   
    attack.style.visibility = "hidden";
    weapons.style.opacity = "1";
    popup.style.opacity = "1";
    
});

let userScore = 0;
let computerScore = 0;
// // function that get's a random number between
// // 'min' and 'max'

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

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let damagePro = document.querySelector(".damage-protagonist");
let damageEne = document.querySelector(".damage-enemy");
let results = document.querySelector(".game-results")

rock.addEventListener('click', () => { 
    game = selections("rock", gameon(Math.round(randomNumber(1, 3))));
    document.getElementById("p1").innerHTML = game;
    if (game == "You win!") {
        damagePro.classList.remove('show');
        // this force-restarts the CSS animation
        void damagePro.offsetWidth;
        damagePro.classList.add('show');
    } else if(game == "You lose!") {
        damageEne.classList.remove('show');
        // this force-restarts the CSS animation
        void damageEne.offsetWidth;
        damageEne.classList.add('show');
    }
    document.getElementById("p2").innerHTML = userScore + ' ' + computerScore;
    if(userScore ==5) {
        document.querySelector(".weapons").innerHTML = "You have won the game!";
    } else if(computerScore ==5) 
        document.querySelector(".weapons").innerHTML = "You have lost the game!";
})
paper.addEventListener('click', () => { 
    game = selections("paper", gameon(Math.round(randomNumber(1, 3))));
    document.getElementById("p1").innerHTML = game;
    if (game == "You win!") {
        damagePro.classList.remove('show');
        // this force-restarts the CSS animation
        void damagePro.offsetWidth;
        damagePro.classList.add('show');
    } else if(game == "You lose!") {
        damageEne.classList.remove('show');
        // this force-restarts the CSS animation
        void damageEne.offsetWidth;
        damageEne.classList.add('show');
    }
    document.getElementById("p2").innerHTML = userScore + ' ' + computerScore;
    if(userScore ==5) {
        document.querySelector(".weapons").innerHTML = "You have won the game!";
    } else if(computerScore ==5) 
        document.querySelector(".weapons").innerHTML = "You have lost the game!";
})
scissors.addEventListener('click', () => { 
    game = selections("scissors", gameon(Math.round(randomNumber(1, 3))));
    document.getElementById("p1").innerHTML = game;
    if (game == "You win!") {
        damagePro.classList.remove('show');
        // this force-restarts the CSS animation
        void damagePro.offsetWidth;
        damagePro.classList.add('show');
    } else if(game == "You lose!") {
        damageEne.classList.remove('show');
        // this force-restarts the CSS animation
        void damageEne.offsetWidth;
        damageEne.classList.add('show');
    }
    document.getElementById("p2").innerHTML = userScore + ' ' + computerScore;
    if(userScore ==5) {
        document.querySelector(".weapons").innerHTML = "You have won the game!";
    } else if(computerScore ==5) 
        document.querySelector(".weapons").innerHTML = "You have lost the game!";

})

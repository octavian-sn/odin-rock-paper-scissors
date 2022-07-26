
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * choices.length);
    var computerChoice = (random, choices[random]);
    return(computerChoice);
}

function getPlayerChoice() {
    let input = prompt ("Choose your weapon: rock, paper or scissors!");
    var playerChoice = (input.charAt(0). toUpperCase()) + (input.slice(1). toLowerCase());
    return(playerChoice);
}

//let computerChoice = getComputerChoice();
//let playerChoice = getPlayerChoice();

function playRound(a, b) {
    //let lose = "You Lose! " + b + " beats " + a +"!";
    //let win = "You Win! " + a + " beats " + b + "!";
    //let tie = "Hmm.. " + a + " versus " + b + ", interesting..";
    let lose = "lose";
    let win = "win";
    let tie = "tie";
    if (a == "Rock" && b == "Paper") {
        return(lose);
    } else if (a == "Paper" && b == "Scissors") {
        return(lose);
    } else if (a == "Scissors" && b == "Rock") {
        return(lose);
    } else if (a == b) {
        return(tie);
    } else if (a !== "Paper" && a !== "Scissors" && a !== "Rock") {
        return(tie);
    } else {
        return(win);
    }
}

//console.log(playRound(playerChoice, computerChoice));

function game() {
    var playerScore = 0;
    var computerScore = 0;
    for (let i = 0; i < 5; i++) {
        var result = playRound(getPlayerChoice(), getComputerChoice());
        if (result == "win") {
            console.log("Well done! The score is: You - " + (playerScore += 1) + ", Computer - " + computerScore);
        } else if (result == "lose") {
            console.log("At least you tried! The score is: You - " + playerScore + ", Computer - " + (computerScore += 1));
        } else {
            console.log("This is a tie! The score is: You - " + playerScore + ", Computer - " + computerScore)
        }
    }
    if (playerScore > computerScore) {
        console.log("You won the game!");
    }   else if (playerScore < computerScore) {
        console.log("Oh no, you lost the game!");
    }   else {
        console.log("Better luck next time!");
    }
}

console.log(game());


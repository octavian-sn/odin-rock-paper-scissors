
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * choices.length);
    let computerChoice = (random, choices[random]);
    return(computerChoice);
}

function getPlayerChoice() {
    let input = prompt ("Choose your weapon: rock, paper or scissors!");
    let playerChoice = (input.charAt(0). toUpperCase()) + (input.slice(1). toLowerCase());
    return(playerChoice);
}

//let computerChoice = getComputerChoice();
//let playerChoice = getPlayerChoice();

function playRound(a, b) {
    let loseMsg = "You Lose! " + b + " beats " + a +"!";
    let winMsg = "You Win! " + a + " beats " + b + "!";
    let tieMsg = "Hmm.. " + a + " versus " + b + ", interesting..";
    let lose = "lose";
    let win = "win";
    let tie = "tie";
    if (a == "Rock" && b == "Paper") {
        console.log(loseMsg);
        return(lose);
    } else if (a == "Paper" && b == "Scissors") {
        console.log(loseMsg);
        return(lose);
    } else if (a == "Scissors" && b == "Rock") {
        console.log(loseMsg);
        return(lose);
    } else if (a == b) {
        console.log(tieMsg);
        return(tie);
    } else if (a !== "Paper" && a !== "Scissors" && a !== "Rock") {
        console.log(tieMsg);
        return(tie);
    } else {
        console.log(winMsg);
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
            console.log("Well done! The score is: You - " + (playerScore += 1) +
             ", Computer - " + computerScore);
        } else if (result == "lose") {
            console.log("At least you tried! The score is: You - " + playerScore +
             ", Computer - " + (computerScore += 1));
        } else {
            console.log("This is a tie! The score is: You - " + playerScore +
             ", Computer - " + computerScore)
        }
    }
    if (playerScore > computerScore) {
        console.log("\n ~~~You won the game!~~~");
    }   else if (playerScore < computerScore) {
        console.log("\n ~Oh no, you lost the game!~");
    }   else {
        console.log("\n ~Better luck next time!~");
    }
}

game();
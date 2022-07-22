
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * choices.length);
    var computerChoice = (random, choices[random]);
    //console.log(computerChoice);
    return(computerChoice);
}

function getPlayerChoice() {
    let input = prompt ("Choose your weapon: rock, paper or scissors!");
    var playerChoice = (input.charAt(0). toUpperCase()) + (input.slice(1). toLowerCase());
    //console.log(playerChoice);
    return(playerChoice);
}

const computerChoice = getComputerChoice();
const playerChoice = getPlayerChoice();

function playRound(a, b) {
    let lose = "You Lose! " + b + " beats " + a +"!";
    if (a == "Rock" && b == "Paper") {
        console.log(lose);
    } else if (a == "Paper" && b == "Scissors") {
        console.log(lose);
    } else if (a == "Scissors" && b == "Rock") {
        console.log(lose);
    } else if (a == b) {
        console.log("Hmm.. " + a + " versus " + b + ", interesting..");
    } else if (a !== "Paper" && a !== "Scissors" && a !== "Rock") {
        console.log("I said rock, paper, scissors only, not.. " + a + "...");
    } else {
        console.log("You Win! " + a + " beats " + b + "!");
    }
}

console.log(playRound(playerChoice, computerChoice));





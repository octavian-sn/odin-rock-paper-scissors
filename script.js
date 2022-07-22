
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
    if (a == "Rock" && b == "Paper") {
        console.log("You Lose!" + b + " beats " + a +"!");
    } else {
        console.log("You are on the right path young one!");
    }
}

console.log(playRound(playerChoice, computerChoice));





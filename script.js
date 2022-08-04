function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * choices.length);
    let computerChoice = (random, choices[random]);
    return(computerChoice);
}

var round = 0;
var humanScore = 0;
var roboScore = 0;

function playRound(a, b) {
    round += 1;
    var message = '';
    let loseMsg = "You Lose! " + b + " beats " + a +"!";
    let winMsg = "You Win! " + a + " beats " + b + "!";
    let tieMsg = "It's a tie! " + a + " versus " + b;
    if (a == "Rock" && b == "Paper") {
        message = loseMsg;
        roboScore += 1;
        scoreBoard.textContent = `${message}
        The score is: You-${humanScore} Computer-${roboScore}`
    } else if (a == "Paper" && b == "Scissors") {
        message = loseMsg;
        roboScore += 1;
        scoreBoard.textContent = `${message} 
        The score is: You-${humanScore} Computer-${roboScore}`
    } else if (a == "Scissors" && b == "Rock") {
        message = loseMsg;
        roboScore += 1;
        scoreBoard.textContent = `${message} 
        The score is: You-${humanScore} Computer-${roboScore}`
    } else if (a == b) {
        message = tieMsg;
        scoreBoard.textContent = `${message} 
         The score is: You-${humanScore} Computer-${roboScore}`
    } else {
        message = winMsg;
        humanScore += 1;;
        scoreBoard.textContent = `${message} 
        The score is: You-${humanScore} Computer-${roboScore}`
    }
    if (humanScore == 5 ) {
        humanScore = 0;
        roboScore = 0;
        scoreBoard.textContent = "Congratulations! You won!!!"
    }
    if (roboScore == 5 ) {
        humanScore = 0;
        roboScore = 0;
        scoreBoard.textContent = "Oh my! Computers are taking over the world!!!"
    }
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', function(){ playRound("Rock", getComputerChoice())});

const paper = document.querySelector('#paper');
paper.addEventListener('click', function(){ playRound("Paper", getComputerChoice())});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function(){ playRound("Scissors", getComputerChoice())});

const content = document.querySelector('#content');
const scoreBoard = document.createElement('h3');
content.appendChild(scoreBoard);
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
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
        mess.textContent = message;
        scoreBoard.textContent = `The score is: You-${humanScore} Computer-${roboScore}`;
    } else if (a == "Paper" && b == "Scissors") {
        message = loseMsg;
        roboScore += 1;
        mess.textContent = message;
        scoreBoard.textContent = `The score is: You-${humanScore} Computer-${roboScore}`;
    } else if (a == "Scissors" && b == "Rock") {
        message = loseMsg;
        roboScore += 1;
        mess.textContent = message;
        scoreBoard.textContent = `The score is: You-${humanScore} Computer-${roboScore}`;
    } else if (a == b) {
        message = tieMsg;
        mess.textContent = message;
        scoreBoard.textContent = `The score is: You-${humanScore} Computer-${roboScore}`;
    } else {
        message = winMsg;
        humanScore += 1;;
        mess.textContent = message;
        scoreBoard.textContent = `The score is: You-${humanScore} Computer-${roboScore}`;
    }
    if (humanScore == 5 ) {
        humanScore = 0;
        roboScore = 0;
        body.removeChild(content);
        body.appendChild(endWindow);
        winLose.textContent = 'Congratulations! You won the game!!!'
        replay.addEventListener('click', function(){ playAgain()});
    }
    if (roboScore == 5 ) {
        humanScore = 0;
        roboScore = 0;
        body.removeChild(content);
        body.appendChild(endWindow);
        winLose.textContent = 'Oh my! Computers are taking over the world!'
        replay.addEventListener('click', function(){ playAgain()});
    }
}

function playAgain() {
    body.removeChild(endWindow);
    body.appendChild(content);
}


const rock = document.querySelector('#rock');
rock.addEventListener('click', function(){ playRound("Rock", getComputerChoice())});

const paper = document.querySelector('#paper');
paper.addEventListener('click', function(){ playRound("Paper", getComputerChoice())});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function(){ playRound("Scissors", getComputerChoice())});

const content = document.querySelector('#content');
const mess = document.createElement('p');
const scoreBoard = document.createElement('h3');
content.appendChild(mess);
content.appendChild(scoreBoard);

const body = document.querySelector('body');
const endWindow = document.createElement('div');
const winLose = document.createElement('h1');
const replay = document.createElement('button');
replay.textContent = 'Play Again? ^_^';
endWindow.appendChild(winLose);
endWindow.appendChild(replay);


var userInput = 'paper';

var userInput = userInput.toLowerCase();

function getcomputerChoice(){
  var number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
    break;
  }
}

function determineWinner(userChoice,computerChoice) {
  if (userChoice === computerChoice) {
    return 'It is a tie!';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The Computer has won!';
    } else {
      return 'You have won!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The Computer has won!';
    }else {
      return 'You have won!';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The Computer has won!';
    } else {
      return 'You have won!';
    }
  }

  if (userChoice === 'bomb') {
    return 'You have won!';
  }
}

function playGame() {
var userChoice = userInput;
var computerChoice = getcomputerChoice();
console.log('You threw: ' + userChoice);
console.log('Computer threw ' + computerChoice);
console.log(determineWinner(userChoice, computerChoice));
}

playGame();

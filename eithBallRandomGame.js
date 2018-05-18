/*
this is a simple program using switch statement to pick a random answer in an Eightball game...using JS
*/

var userQuestion = 'What will be the result?';
var randomNumber = Math.floor(Math.random() * 7);
var eightBall = '';

switch (randomNumber) {
  case 0:
  eightBall = 'It is certain';
    break;
  case 1:
  eightBall = 'It is decidedly so';
    break;
  case 2:
  eightBall = 'Reply hazy try again';
    break;
  case 3:
  eightBall = 'Cannot predict now';
    break;
  case 4:
  eightBall = 'Don\'t count on it';
    break;
  case 5:
  eightBall = 'My sources say no';
    break;
  case 6:
  eightBall = 'Outlook not so good';
    break;
  default:
  eightBall = 'Signs point to yes';
    break;
}

console.log(userQuestion);
console.log(eightBall);


function isPasswordValid(input) {
  if (hasUpperCase(input) && hasLowerCase(input) && isLongEnough(input) && hasSpecialCharacter(input)) {
    console.log('Password is valid');
  }
  if (!hasUpperCase(input)) {
    console.log('Invalid Password! Password needs a capital letter');
  }
  if (!hasLowerCase(input)) {
    console.log('Invalid Password!Password needs a lowercase letter');
  }
  if (!isLongEnough(input)) {
    console.log('Invalid Password! Password needs to be atleast 8 characters');
  }
  if (!hasSpecialCharacter(input)){
    console.log('Invalid Password! Password should contain at least a specialCharacter!');
  }
}

function hasUpperCase(input) {
  for (var i = 0; i < input.length; i++ ) {
    if (input[i] === input[i].toUpperCase()) {
      return true;
    }
  }
}

function hasLowerCase(input) {
  for( var i in input){
    if(input[i] === input[i].toLowerCase()){
      return true;
    }
  }
}

function isLongEnough(input) {
  if (input.length >= 8) {
    return true;
  }
}

function hasSpecialCharacter(input) {
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];
  for (var i in input) {
    for (var character in specialCharacters) {
      if (input[i] === specialCharacters[character]) {
        return true;
      }
    }
  }
}


isPasswordValid('KK999iii@');

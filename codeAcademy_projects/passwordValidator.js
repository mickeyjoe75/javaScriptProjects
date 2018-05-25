function hasUpperCase(input) {
  for (var i = 0; i < input.length; i++ ) {
    if (input[i] === input[i].toUpperCase()) {
      return true;
    }
  }
}


function isPasswordValid(input) {
  if (hasUpperCase(input)) {
    console.log('Password is valid');
  }
}

isPasswordValid('Kundi');

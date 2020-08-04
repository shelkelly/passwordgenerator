// 
// ** MY CODE **

// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatedPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



var lowercase = ["a", "b", "c", "d","e","f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var uppercase = ["A", "B", 'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U', 'V', 'W', 'X', 'Y', 'Z']

var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

//begin prompts
function generate() {
var promptChar = prompt("How many characters would you like? Must be between 8 and 125.");
    if (promptChar < 8 || promptChar > 128){
      window.alert("Must be between 8 and 128.")
    } else {
confirmLow = confirm("Would you like lowercase characters to be included?");
confirmUp = confirm("Would you like uppercase characters to be included?");
confirmNum = confirm("Would you like numbers to be included?");
confirmSpecial = confirm("Would you like special characters to be included?");
    }

//4 false
if (!confirmLow && !confirmUp && !confirmNum && !confirmSpecial) {
  chosen = alert("You must pick at least one.")
}
//4 true
else if (confirmLow && confirmUp && confirmNum && confirmSpecial) {
  chosen = lowercase.concat(uppercase, numbers, special);
}
//3 true
else if (confirmLow && confirmUp && confirmNum) {
  chosen = lowercase.concat(uppercase, numbers);
}
else if (confirmLow && confirmUp && confirmSpecial) {
  chosen = lowercase.concat(uppercase, confirmSpecial);
}
else if (confirmLow && confirmNum && confirmSpecial) {
  chosen = lowercase.concat(numbers, special);
}
else if (confirmUP && confirmNum && confirmSpecial) {
  chosen = uppercase.concat(numbers, special);
}
//2 true
else if (confirmLow && confirmUp) {
  chosen = lowercase.concat(uppercase);
}
else if (confirmLow && confirmNum) {
  chosen = lowercase.concat(numbers);
}
else if (confirmLow && confirmSpecial) {
  chosen = lowercase.concat(special);
}
else if (confirmUp && confirmNum) {
  chosen = uppercase.concat(numbers);
}
else if (confirmUp && confirmSpecial) {
  chosen = uppercase.concat(special);
}
else if (confirmNum && confirmSpecial) {
  chosen = numbers.concat(special);
}
//1 true
else if (confirmLow) {
  chosen = lowercase;
}
else if (confirmUp) {
  chosen = uppercase;
}
else if (confirmNum) {
  chosen = numbers;
}
else if (confirmSpecial) {
  chosen = special;
}
var generatedPassword = [];
for (var i = 0; i < promptChar; i++) {
  var randomize = chosen[Math.floor(Math.random() * chosen.length)];
  generatedPassword.push(randomize);
};
 generatePassword = generatedPassword.join();
password.textContent = generatedPassword

generateBtn.addEventListener("click", writePassword);
};



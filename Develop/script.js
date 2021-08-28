// Assignment code here

// Create functions to generate different values

function generateSymbols () {
  var symbols = '!@#$%^&*(){}[]<>?';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generateNumbers () {
  var numbers = '0123456789';
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function generateUpperCaseLetters () {
  var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
}

function generateLowerCaseLetters () {
  var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  return lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
}
console.log(generateLowerCaseLetters());



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

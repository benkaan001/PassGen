// Assignment code here

//Create the global elements

var symbols = '!@#$%^&*(){}[]<>?';
var numbers = '0123456789';
var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var password = "";
var finalPassword = "";

//Create prompts 

function generatePassword() {
  var userInputLength = prompt ("Your password must contain minimum 8 maximum 128 characters. Enter a number.");

  // Confirm that user entered a valid numeric value between 8 and 128

  while (userInputLength < 8 || userInputLength > 128 || isNaN(parseInt(userInputLength)) === true){
    alert(" That was an invalid entry! Please enter a number value between 8 and 128!");
    isNaN(parseInt(userInputLength));
    return generatePassword();
  }
  // Confirm if user prefers lowercase letters

  var userInputLowerCaseLetters = confirm ("Would you like your password to include lowercase letters?");

  if (userInputLowerCaseLetters === true )  {
    finalPassword = finalPassword + lowerCaseLetters;
  }

  // Confirm if user prefers uppercase letters

  var userInputUpperCaseLetters = confirm ("Would you like your password to include uppercase letters?")
  
  if (userInputUpperCaseLetters === true )  {
    finalPassword = finalPassword + upperCaseLetters;
  }

  // Confirm if user prefers numbers

  var userInputNumbers = confirm ("Would you like your password to include numeric values?");

  if (userInputNumbers === true ) {
    finalPassword = finalPassword + numbers;
  }

  //Confirm if user prefers symbols

  var userInputSymbols = confirm ("Would you like your password to include symbols?");

  if (userInputSymbols === true) {
    finalPassword = finalPassword + symbols;
  }

  // Confirm user's choice has met at least one of the character requirements

  if (userInputLowerCaseLetters === false && userInputUpperCaseLetters === false && userInputNumbers === false && userInputSymbols === false){
    alert ("Your password must contain at least ONE type of character. Please try it again.");
    return generatePassword();
  }




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

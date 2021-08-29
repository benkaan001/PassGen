// Assignment code here

//Create the global variables

var symbols = '!@#$%^&*(){}[]<>?';
var numbers = '0123456789';
var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
//var password = "";
//var finalPassword = "";

//Create prompts 

function generatePassword() {
  var password = "";
  var finalPassword = "";

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
    finalPassword = finalPassword.concat(lowerCaseLetters);
  } else {
    finalPassword = finalPassword;
  }

  // Confirm if user prefers uppercase letters

  var userInputUpperCaseLetters = confirm ("Would you like your password to include uppercase letters?")
  
  if (userInputUpperCaseLetters === true )  {
    finalPassword = finalPassword.concat(upperCaseLetters);
  } else{
    finalPassword = finalPassword;
  }

  // Confirm if user prefers numbers

  var userInputNumbers = confirm ("Would you like your password to include numeric values?");

  if (userInputNumbers === true ) {
    finalPassword = finalPassword.concat(numbers);
  } else {
    finalPassword = finalPassword;
  }

  //Confirm if user prefers symbols

  var userInputSymbols = confirm ("Would you like your password to include symbols?");

  if (userInputSymbols === true) {
    finalPassword = finalPassword.concat(symbols);
  } else {
    finalPassword = finalPassword;
  }

  // Confirm user's choice has met at least one of the character requirements

  if (userInputLowerCaseLetters === false && userInputUpperCaseLetters === false && userInputNumbers === false && userInputSymbols === false){
    alert ("Your password must contain at least ONE type of character. Please try it again.");
    return generatePassword();
  };

  for (var i = 0 ; i< userInputLength; i++) {
    // debugger to inspect the for loop 
    password = password + finalPassword[Math.floor(Math.random() * finalPassword.length)];
  }

  // observe the iteration 
  console.log(userInputLength);
  console.log(password.length);
  console.log(finalPassword.length);

  return password;

};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;


};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

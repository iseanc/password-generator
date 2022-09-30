// Assignment Code
var generateBtn = document.querySelector("#generate");

/* VARIABLES */
var numPasswordChars = 0; // for number of password chars to generate.
var useLower = true; // for choice "Use Lower Case"
var useUpper = true; // for choice "Use Upper Case"
var useNumber = true; // for choice "Use Numbers"
var useSpecial = true; // for choice "Use Special Characters"
var password = "";  // array for new password.

/* CONSTANTS for character sets (random generator functions below use these strings*/
const alphabet = "abcdefghijklmnopqrstuvwxyz";
// NOTE: List from https://owasp.org/www-community/password-special-characters
// Minus space and double-quote.
const specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

/* FUNCTION EXPRESSIONS to generate random chars of different types*/
var randomLowerCaseChar = function() { return alphabet[Math.floor(Math.random() * alphabet.length)]; } //random [a-z].
var randomUpperCaseChar = function() { return alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();} // random [A-Z]
var randomInt = function() { return Math.floor(Math.random() * 10);} //random [0-9]
var randomSpecialChar = function() { return specialChars[Math.floor(Math.random() * specialChars.length)];} // 

/* PASSWORD GENERATOR FUNCTION */
function generatePassword() {
  
  /* PROMPT FOR INPUT AND STORE CHOICES IN VARIABLES */
  // While loop keeps prompting for password length if user Cancels or enters a value out of range (< 8 || > 128)
  while (numPasswordChars < 8 || numPasswordChars > 128) {
    numPasswordChars = window.prompt("Password length: Enter a value between 8 and 128. Default: 8", 8);
  }
  // character type choices for user
  useLower = window.confirm("Use lower case characters?");
  useUpper = window.confirm("Use upper case characters?");
  useNumber = window.confirm("Use numbers?");
  useSpecial = window.confirm("Use special characters?");

  // if user cancels all character types, then use lower case only.
  if (useLower === false && useUpper === false && useNumber === false && useSpecial === false) { useLower = true; };

  // build array of generator functions from user choices
  var arrRandomGenerator = []
  // var to store password string
  var passwordString = [];

  //populate the array of functions with generator type user chose
  if (useLower) {
    arrRandomGenerator.push(randomLowerCaseChar);
  }
  if (useUpper) {
    arrRandomGenerator.push(randomUpperCaseChar);
  }
  if (useNumber) {
    arrRandomGenerator.push(randomInt);
  }
  if (useSpecial) {
    arrRandomGenerator.push(randomSpecialChar);
  }

  // for loop randomly calls one of the generator functions from arrRandomGenerator
  // and concatenates the value onto passwordString
  for (var i = 0; i < numPasswordChars; i++) {
    passwordString = passwordString + (arrRandomGenerator[Math.floor(Math.random() * arrRandomGenerator.length)]());
    
  }
 
  // reset the arrRandomGenerator array and password length variable so users can generate a fresh password by clicking "Generate Password" again (without requiring page refresh)
  arrRandomGenerator = [];
  numPasswordChars = 0;

  //return the new password string
  return passwordString;
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

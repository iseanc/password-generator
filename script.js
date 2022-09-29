// Assignment Code
var generateBtn = document.querySelector("#generate");

/* VARIABLES */
var numPasswordChars; // for number of password chars to generate.
var useLower = true; // for choice "Use Lower Case"
var useUpper = true; // for choice "Use Upper Case"
var useNumber = true; // for choice "Use Numbers"
var useSpecial = true; // for choice "Use Special Characters"
var password = "";  // array for new password.

/* CONSTANTS for character sets */
const alphabet = "abcdefghijklmnopqrstuvwxyz";
// NOTE: Removed space and double-quote from the list available at https://owasp.org/www-community/password-special-characters
const specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

/* CONSTANTS to hold randomly generated characters*/
const randomLowerCaseChar = alphabet[Math.floor(Math.random() * alphabet.length)]; //returns random char from 'alphabet'.
const randomUpperCaseChar = alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase(); // returns char from 'alphabet' as upper case character.
const randomInt = Math.floor(Math.random() * 10); // returns digits 0 thru 9.
const randomSpecialChar = specialChars[Math.floor(Math.random() * specialChars.length)]

var randomChars = {
  lower : randomLowerCaseChar,
  upper : randomUpperCaseChar,
  number : randomInt,
  special : randomSpecialChar
}

/* TESTING RANDOM CHARACTER GENERATORS */
// console.log("Lower Case: " + randomLowerCaseChar);
// console.log("Upper Case: " + randomUpperCaseChar);
// console.log("Integer: " + randomInt);
// console.log("Special Char: " + randomSpecialChar);
// password = password + "a";
// console.log("password is: " + password);
console.log(randomChars.lower + randomChars.upper + randomChars.number + randomChars.special);

/* FUNCTIONS */

function getLowerCaseChar() {

}

function getUpperCaseChar() {

}

function getNumber() {

}

function getSpecialChar() {

}

// Write password to the #password input
function writePassword() {

  numPasswordChars = window.prompt("Number of characters in password (enter a value between 8 and 128", 8);
  useLower = window.confirm("Use lower case characters?");
  useUpper = window.confirm("Use upper case characters?");
  useNumber = window.confirm("Use Numbers?");
  useSpecial = window.confirm("Use special characters?");

  console.log("Number of characters:" + numPasswordChars);
  console.log("Use Lower? " + useLower);
  console.log("Use Upper? " + useUpper);
  console.log("Use Numbers? " + useNumber);
  console.log("Use Special: " + useSpecial);

  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

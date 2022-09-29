// Assignment Code
var generateBtn = document.querySelector("#generate");

/* VARIABLES */
var useLower = true;
var useUpper = true;
var useNumber = true;
var useSpecial = true;

/* CONSTANTS */
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const randomLowerCaseChar = alphabet[Math.floor(Math.random() * alphabet.length)];
const randomUpperCaseChar = alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
const randomInt = Math.floor(Math.random() * 9);
// NOTE: Removed space and double-quote from the list available at https://owasp.org/www-community/password-special-characters
const specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
const randomSpecialChar = specialChars[Math.floor(Math.random() * specialChars.length)]

/* TESTING RANDOM CHARACTER GENERATORS */
console.log("Lower Case: " + randomLowerCaseChar);
console.log("Upper Case: " + randomUpperCaseChar);
console.log("Integer: " + randomInt);
console.log("Special Char: " + randomSpecialChar);

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
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

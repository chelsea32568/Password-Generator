// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numericCharacters = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
];

// Array of lowercase characters to be included in password
var lowerCaseCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCaseCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var userLength = prompt("How many chacters would you like your password to be? (type a number between 8-128)");
    if (userLength < 8 || userLength > 128) {
      alert("Passwords must be between 8-128 characters long. Please try again.");
      var userLength = prompt("How many chacters would you like your password to be? (type a number between 8-128)");
    }
  console.log(userLength);
  var lowerCase = confirm("Your password will include lowercase letters")
  console.log(lowerCase);
  var upperCase = confirm("Your password will include uppercase letters")
  console.log(upperCase);
  var numeric = confirm("Your password will include numbers")
  console.log(numeric);
  var specialCharacters= confirm("Your password will include special characters")
  console.log(specialCharacters);
  } 

// Function for getting a random element from an array
function lowerCaseChar () {
  console.log(lowerCaseCharacters[(Math.floor(Math.random() * lowerCaseCharacters.length))]);
}
lowerCaseChar()

function upperCaseChar () {
  console.log(upperCaseCharacters[(Math.floor(Math.random() * upperCaseCharacters.length))]);
}
upperCaseChar()

function numericChar () {
  console.log(numericCharacters[(Math.floor(Math.random() * numericCharacters.length))]);
}
numericChar()

function specialChar () {
  console.log(specialCharacters[(Math.floor(Math.random() * specialCharacters.length))]);
}
specialChar()

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  var length = userLength.value;
  console.log(length);
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
  

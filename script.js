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
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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
  alert("Your password does not meet the critia.");
  var userLength = prompt("Password must be between 8 and 128 characters in length.");
  }
  var lowerCase = prompt("Would you like your password to include Lowercase letters? (Y/N)")
  var upperCase = prompt("Would you like your password to include Uppercase letters? (Y/N)")
  var numeric = prompt("Would you like your password to include numbers? (Y/N)")
  var specialCharacters= prompt("Would you like your password to include special characters? (Y/N)")
  if (lowercase === "N" && uppercasE === "N" && numeric === "N" && specialCharacters === "N") {
    return "Your passwords does not meet the password critia";
    };
}




// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
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



// // not my code
// // Assignment Code
// var generateBtn = document.querySelector("#generate");
// function generatePassword() {
// // Critia prompts for password to generate
// var uppercase = confirm("Your password should have an uppercase letter! Click OK to continue");
// var lowercase = confirm("Your password should have a lowercase letter! Click OK to continue");
// var symbols = confirm("Your password should have a symbol! Click OK to continue");
// var numbers = confirm("Your password should have a number! Click OK to continue");
// var keyLength = prompt("Password must be between 8 and 128 characters! Click OK to continue");

// // Password variables for allowable passwords characters
// var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
// var lowercaseABC ="abcdefghijklmnopqrstuvwxyz";
// var specialSymbols ="!@#$%^&*()?.<\>|=+:;,[-_]"
// var numeric ="0123456789"
// var multiSelect =[];

// //making sure user follows critia
// if (keyLength < 8 || keyLength > 128) {
//   alert("Your password does not meet the critia");
//   var keyLength = prompt("Password must be between 8 and 128 characters in length.");
// }

// if (uppercaseABC === false && lowercaseABC === false && specialSymbols === false && numeric === false) {
// return "Your passwords does not meet the password critia";
// };

// var uppercaseABC = confirm("Your password should have an uppercase letter!");
// var lowercaseABC = confirm("Your password should have a lowercase letter!");
// var specialSymbols = confirm("Your password should have a symbol!");
// var numeric = confirm("Your password should have a number!");
// }

// // Demands used to call the correct critia
// if (lowercaseABC) {multiSelect += lowercase}
// if (uppercaseABC) {multiSelect += uppercase;}
// if (numeric) {multiSelect += numbers;}
// if (specialSymbols) {multiSelect += symbols;}

// let finalPassword = ""
// for (let i = 0; i < keyLength; i++) {
//   let rng =[Math.floor(Math.random() * multiSelect.length)];
//   // or finalPassword += possibleCharacters[rng];
//   finalPassword = finalPassword + multiSelect[rng];
// }
// return finalPassword;
// };


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }
// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// //
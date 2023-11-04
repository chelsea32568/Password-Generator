// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {}

// Function for getting a random element from an array
function lowerCaseChar() {
  console.log(
    lowerCaseCharacters[Math.floor(Math.random() * lowerCaseCharacters.length)]
  );
}
//lowerCaseChar()

function upperCaseChar() {
  console.log(
    upperCaseCharacters[Math.floor(Math.random() * upperCaseCharacters.length)]
  );
}
//upperCaseChar()

function numericChar() {
  console.log(
    numericCharacters[Math.floor(Math.random() * numericCharacters.length)]
  );
}
//numericChar()

function specialChar() {
  console.log(
    specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
  );
  var something =
    specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
}

// Function to generate password with user input
function generatePassword() {


  var pool = [];

  //DOES NOT WORK IF TYPE IN WORD. HOW CAN I MAKE SURE ITS ONLY A NUMBER?
  var userLength = prompt(
    "How many chacters would you like your password to be? (type a number between 8-128)"
  );
  if (userLength < 8 || userLength > 128) {
    alert("Passwords must be between 8-128 characters long. Please try again.");
    //ALLOWS ME TO PUT NUMBER IN TWICE
    var userLength = prompt(
      "How many chacters would you like your password to be? (type a number between 8-128)"
    );
  }
  console.log(userLength);
  var lowerCase = confirm("Your password will include lowercase letters");
  if (lowerCase === true) {
    pool = pool.concat(lowerCaseCharacters);
  }

  var upperCase = confirm("Your password will include uppercase letters");
  if (upperCase === true) {
    pool = pool.concat(upperCaseCharacters);
  }

  var numeric = confirm("Your password will include numbers");
  if (numeric === true) {
    pool = pool.concat(numericCharacters);
  }

  var special = confirm("Your password will include special characters");
  if (special) {
    pool = pool.concat(specialCharacters);
  }

  //HOW DO I MAKE SURE ITS ONE FROM EACH GROUP
  // FOR (VARIABLE, CONDITION, AFTER) {LOGIC}
  var passwordToReturn = "";
  for (i = 0; i < userLength; i++) {
    passwordToReturn =
      passwordToReturn + pool[Math.floor(Math.random() * pool.length)];
  }

  console.log(passwordToReturn);
  return passwordToReturn;

  // function specialChar () {
  //   console.log(specialCharacters[(Math.floor(Math.random() * specialCharacters.length))]);
  //   var something = specialCharacters[(Math.floor(Math.random() * specialCharacters.length))]
  // }

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

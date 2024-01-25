console.log('hello')

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];

// }

// user enters website 
// user clicks generate password button

// make button clickable 

// prompt user for how many characters

// create a prompt for user for how many char

// check if password is between 8-128 characters long 

//  validate that password is between 8-128 char
// write an if statement to make sure password lenght is between 8-128



// prompt user if they want special char
// prompt user if they want numbers  char
// prompt user if they want uppercase char
// prompt user if they want lowercase char

// make confrim prompts for user

// after all prompts are anwered generate password

// use if statement 
// if user confrim special char then include
// if user confrim numbers char then include
// if user confrim uppercase char then include
// if user confrim lowercase char then include
// 
//use var to store user selected 'strings' 
//
//pick user selected inputs at random (create a for loop)
//make new var from the 'for loop'



// once prompts are complete generate password 

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseLetters = lowercaseLetters.toUpperCase();
  const number = "0123456789";
  const specialChar = " !\"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~";

  let passwordString = '';
  let randomCharacters = '';   // "abcdefghijklmnopqrstuvwxyz0123456789"

  //#region Get user input
  // let passwordLength = prompt("Enter a password length between 8-128 characters gang gang ");                 // 10
  // //try to get the password length to vaildate between 8 and 128 characters 
  // if (passwordLength.length < 8 || passwordLength.length > 128) {
  //   alert('Invalid password length. Please enter a value between 8 -128 characters ')
  // } else if (passwordLength.length > 8 || passwordLength.length < 128) {
  //   alert('Password must be between 8 and 128 characters long')
  // }

  var minLength = 8; // Minimum password length
  var maxLength = 128; // Maximum password length

  var passwordLength = 0;

  while (passwordLength < minLength) {
    passwordLength = parseInt(prompt("Enter the desired password length gang gang (between " + minLength + " and " + maxLength + "):"));

    if (isNaN(passwordLength)) {
      alert("Invalid input. Please enter a number.");
    } else if (passwordLength < minLength) {
      alert("Password length is too short. Please enter a length of at least " + minLength + " characters.");
    } else if (passwordLength > maxLength) {
      alert("Password length is too long. Please enter a length of at most " + maxLength + " characters.");
    }
  }

  let lowercase = confirm("do you want lowercase characters?");        // true
  if (lowercase) {
    randomCharacters += lowercaseLetters;
  }

  let uppercase = confirm("do you want uppercase characters?");        // false
  if (uppercase) {
    randomCharacters += uppercaseLetters;
  }

  let numeric = confirm("do you want numeric characters?");            // true
  if (numeric) {
    randomCharacters += number;
  }

  let special = confirm("do you want special characters?");            // false
  if (special) {
    randomCharacters += specialChar;
  }
  //#endregion

  // get random password
  for (let i = 0; i < passwordLength; i++) {
    // do something
    passwordString += randomCharacters[Math.floor(Math.random() * randomCharacters.length)];     // t
  }

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


//   passwordLength = parseInt(prompt("Enter the desired password length (between " + minLength + " and " + maxLength + "):"));

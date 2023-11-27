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
  let length = prompt("password length: ");                 // 10
  //try to get the password length to vaildate between 8 and 128 characters 
  if (length.length >= 8 && length <= 128) {
    prompt('good length')
  } else if (length.length < 8 && length.length > 128) {
    prompt('Password must be between 8 and 128 characters long')
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
  for (let i = 0; i < length; i++) {
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
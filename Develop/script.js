// Assignment Code
var generateBtn = document.querySelector("#generate");

//take criterias from user
var passwordLength = window.prompt("How many charactors do you want the password to contain?");
var hasLowercase=window.confirm("Do you want the password to contain lowercase letter?");
var hasUppercase=window.confirm("Do you want the password to contain uppercase letter?");
var hasNumeric=window.confirm("Do you want the password to contain numeric?");
var hasSpecialCharacter = window.confirm("Do you want the password to contain special character?");
var originalArray=new Array();
var lowerCaseLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacter = ["@", "~", "!", "#", "$", "%", "^", "&", "*", "_", "-", "+", "=", "`", "|", "\\", "(", ")", "{", "}", "[", "]", ":", ";", "'", "<", ">", ",", ".", "?", "/"];
var fullCharacterList = lowerCaseLetter.concat(upperCaseLetter).concat(numeric).concat(specialCharacter)

var randomCharacter = function () { 
  var randomIndex = Math.floor(Math.random() * fullCharacterList.length);
  return fullCharacterList[randomIndex];
}






//generate original random password

var originalPasswordGenerator = function () {
  //get a array of the user specified length with randomly chosen charactors
  for (var i = 0; i < passwordLength; i++) {
    originalArray[i] = randomCharacter();
  }

  //convert the array to string
  var originalPassword = originalArray.join('');

  return originalPassword
};


//modify to new password matching user's criterias









// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

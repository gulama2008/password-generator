// Assignment Code
var generateBtn = document.querySelector("#generate");


var originalArray = new Array();
var criteriaArray = new Array();
var randomCriteriaIndexArray = new Array();
var lowerCaseLetterList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetterList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacterList = ["@", "~", "!", "#", "$", "%", "^", "&", "*", "_", "-", "+", "=", "`", "|", "\\", "(", ")", "{", "}", "[", "]", ":", ";", "'", "<", ">", ",", ".", "?", "/"];
var fullCharacterList = lowerCaseLetterList.concat(upperCaseLetterList).concat(numericList).concat(specialCharacterList)
var passwordLength 
var hasLowercase 
var hasUppercase 
var hasNumeric 
var hasSpecialCharacter 

//function to return a random character from the full character list
function randomCharacter() { 
  var randomIndex = Math.floor(Math.random() * fullCharacterList.length);
  return fullCharacterList[randomIndex];
}

//generate original random password
function originalPasswordGenerator() {
  //get a array of the user specified length with randomly chosen charactors
  for (var i = 0; i < passwordLength; i++) {
    originalArray[i] = randomCharacter();
  }
  return originalArray;
}


//create a function which can obtain (criteriaArray.length) numbers of none repeatitive random index number in the final password
function noneRepeatitiveRandomNumber(criteriaArrayLength,passwordLength) {
  var array = new Array();
  var result = Math.floor(Math.random() * passwordLength);
  array.push(result);
  for (var i = 1; i < criteriaArrayLength; i++) {
    result = Math.floor(Math.random() * passwordLength);
    for (var j = 0; j < array.length; j++) {
      if (result == array[j]) {
        i--;
        result = -1;
        break;
      }
    }
    if (result >= 0) {
      array.push(result);
     }
  }
  return array;
}


function generatePassword() {
  passwordLength = window.prompt("How many charactors do you want the password to contain?")-0;
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    window.alert("Please enter a valid number between 8 and 128")
    return generatePassword();
  } else { 
    hasLowercase = window.confirm("Do you want the password to contain lowercase letter?");
    hasUppercase = window.confirm("Do you want the password to contain uppercase letter?");
    hasNumeric = window.confirm("Do you want the password to contain numeric?");
    hasSpecialCharacter = window.confirm("Do you want the password to contain special character?");
    criteriaArray = [];
    originalArray = [];
    randomCriteriaIndexArray = [];
    if (hasLowercase) { 
      var randomIndex = Math.floor(Math.random() * lowerCaseLetterList.length);
      criteriaArray.push(lowerCaseLetterList[randomIndex]);
    }
    if (hasUppercase) { 
      var randomIndex = Math.floor(Math.random() * upperCaseLetterList.length);
      criteriaArray.push(upperCaseLetterList[randomIndex]);
    }
    if (hasNumeric) { 
      var randomIndex = Math.floor(Math.random() * numericList.length);
      criteriaArray.push(numericList[randomIndex]);
    }
    if (hasSpecialCharacter) { 
      var randomIndex = Math.floor(Math.random() * specialCharacterList.length);
      criteriaArray.push(specialCharacterList[randomIndex]);
    }
    if (criteriaArray.length == 0) {
      window.alert("Please choose at least one character type");
      generatePassword();
    } else { 
      var basePassword = originalPasswordGenerator();
      var replaceIndexArray = noneRepeatitiveRandomNumber(criteriaArray.length, passwordLength);  
      for (i = 0; i < criteriaArray.length; i++) { 
        basePassword[replaceIndexArray[i]] = criteriaArray[i];
      }
      var Password = basePassword.join('')
      return Password;
    }
  }
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here
var characterLength = 8;
var choiceArr = [];


var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = ['0','1','2','3','4','5','6','7','8','9',];
var specialCharArr = ['!','@','#','$','%','&','*','_','-','?',];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  
  if (correctPrompts) {

  var newPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
var password = "";
for(var i = 0; i < characterLength; i++) {
  var randomLetter = Math.floor(Math.random() *choiceArr.length);
  password = password + choiceArr[randomLetter];
}
return password;
}

function getPrompts(){
  characterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters"));
 
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length invalid. Please try again.")
    return false;
  }
if (confirm("Lowercase Letters?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (confirm("UpperCase Letters?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if (confirm("Special Characters")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  if (confirm("What about numbers?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}
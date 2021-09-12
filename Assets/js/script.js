// Assignment code here

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz" ;
var numbers = "0123456789";
var specialChar = "!@#$%^&*()_+~\\`|}{[]:;?><,./-=";
var choices = ""

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
 
  
  var passwordText = document.querySelector("#password");

  var lengthQuestion = window.prompt ("How many characters would you like your password to be?")
  if (lengthQuestion < 8 || lengthQuestion > 120) {
      alert ("Must be between 8-128 characters! Please try again")
      return writePassword();
  }

  var upperCaseQuestion = window.confirm ("Click 'OK' if you would you like to use upper case letters." )
  var lowerCaseQuestion = window.confirm ("Click 'OK' if you would you like to use lower case letters." )
  var numbersCaseQuestion = window.confirm ("Click 'OK' if you would you like to use numbers." )
  var specialCharQuestion = window.confirm ("Click 'OK' if you would you like to use special characters." )

  let generator = ""

  if (lowerCaseQuestion === true) {
    choices += lowerCase
  }
    if (upperCaseQuestion === true) {
      choices += upperCase
    }
    if (numbersCaseQuestion === true) {
      choices += numbers
    }
    if (specialCharQuestion === true) {
      choices += specialChar
    }

   console.log(choices)
    for (let i = 0; i < lengthQuestion; i++) {
      generator += choices[Math.floor(Math.random() * choices.length)];
      console.log(generator, i)
      
  }

  passwordText.textContent = generator
  }











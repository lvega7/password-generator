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

// Ask the desired length of password
  var lengthQuestion = window.prompt ("How many characters would you like your password to be? (Must be between 8-128)")
  if (lengthQuestion < 8 || lengthQuestion > 120) {
      alert ("Must be between 8-128 characters! Please try again.")
      return writePassword();
  }

  // confirm prompts
  var upperCaseQuestion = window.confirm ("Click 'OK' if you would you like to use upper case letters." )
  var lowerCaseQuestion = window.confirm ("Click 'OK' if you would you like to use lower case letters." )
  var numbersCaseQuestion = window.confirm ("Click 'OK' if you would you like to use numbers." )
  var specialCharQuestion = window.confirm ("Click 'OK' if you would you like to use special characters." )
  let generator = ""

  // If statments to add or not add each variable
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

  // if false to every prompt ALERT & restart function 
  else if (upperCaseQuestion === false && lowerCaseQuestion === false && numbersCaseQuestion === false && specialCharQuestion === false) {
    alert ("You must choose at least one of the characters!")
    writePassword();
  }


  console.log(choices)

  // Random password with options chosen
  for (let i = 0; i < lengthQuestion; i++) {
      generator += choices[Math.floor(Math.random() * choices.length)];
      console.log(generator, i)
      
  }

  passwordText.textContent = generator
  }











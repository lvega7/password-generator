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
  if (lengthQuestion === "5") {
    passwordText.textContent = lengthQuestion;
  }













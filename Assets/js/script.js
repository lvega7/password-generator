// Assignment code here

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz" ;
var numbers = "0123456789";
var symbolChar = "!@#$%^&*()_+~\\`|}{[]:;?><,./-=";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
 

  var passwordText = document.querySelector("#password");

  // var lengthQuestion = window.prompt ("How many characters would you like your password to be?")
  // if (lengthQuestion === "5") {
  //   passwordText.textContent = lengthQuestion;
  // }

  var upperCaseQuestion = window.prompt ("Would you like to use upper case letters? Type 'yes' or 'no'.")

  upperCaseQuestion = upperCaseQuestion.toLowerCase();
  if (upperCaseQuestion === "yes") {
    for (let i = 0; i < 20; i++) {
      let generator = upperCase[Math.floor(Math.random() * 26)];
      
      passwordText.textContent = generator
      

  }
 
    }
  }

    // passwordText.textContent = upperCase[Math.floor(Math.random()* 20)];
    //   passwordText += writePassword;
  
  // function makePassword() {
  //   passwordText.textContent = ("okay");
  
  // }
 

  // var password = generatePassword();

  // var specialChar = \"" !"#$%&'()*+,-./:;<=>?@[\]_`{|}~^\";




  // alert ("Whats up");

  // passwordText.value = password;

  // var passwordLength = window.alert ('How long would you like your password to be?')



// Add event listener to generate button

// generateBtn.addEventListener("click", writePassword);

// generateBtn.addEventListener("click", function() {alert ("Hello world");});

